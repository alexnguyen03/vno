import axios from "axios";

const API_BASE_URL = "http://localhost:7000"; // Thay bằng URL API của bạn

// Tạo instance axios riêng
const BaseApiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Thêm interceptor request để tự động thêm JWT token vào header
BaseApiClient.interceptors.request.use(
    (config) => {
        // Lấy token từ localStorage hoặc context/state quản lý auth của bạn
        const now = new Date();
        console.log(
            `[${now.toISOString()}] ${config.method?.toUpperCase()} request to ${config.url}`,
            {
                headers: config.headers,
                params: config.params,
                data: config.data,
            }
        );
        const token = localStorage.getItem("jwtToken");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Thêm interceptor response để xử lý lỗi chung (ví dụ token hết hạn)
BaseApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Ví dụ xử lý lỗi 401 Unauthorized (token hết hạn)
            if (error.response.status === 401) {
                // Xử lý logout hoặc refresh token ở đây
                console.log("Unauthorized! Token có thể đã hết hạn.");
                // Ví dụ: xóa token và redirect về trang login
                localStorage.removeItem("jwtToken");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default BaseApiClient;
