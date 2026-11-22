// Ganti alamat IP ini dengan IPv4 laptop Anda (cek lewat perintah 'ipconfig' di CMD)
// Pastikan HP dan Laptop terhubung ke jaringan Wi-Fi yang sama.
export const API_BASE_URL = "http://192.168.0.112:8000/api";
export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  REGISTER: `${API_BASE_URL}/register`,
  PROFILE: `${API_BASE_URL}/profile`,
  LOGOUT: `${API_BASE_URL}/logout`,
};
