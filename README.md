# Profilito · Phạm Quang Minh

Portfolio cá nhân xây dựng bằng Next.js App Router, TypeScript strict và Tailwind CSS.

## Chạy local

1. Cài Node.js 20 trở lên.
2. Chạy `npm install`.
3. Sao chép `.env.example` thành `.env.local`, đặt `NEXT_PUBLIC_SITE_URL` thành domain portfolio và điền biến Resend nếu muốn bật gửi email.
4. Chạy `npm run dev`, sau đó mở http://localhost:3000.

## Thay ảnh và CV

Các đường dẫn ảnh và CV tập trung tại `src/data/assets.ts`. Ảnh hiện tại là SVG placeholder có tên tệp để thay thế. Giữ đúng tỉ lệ ảnh giao diện web 16:10 và ảnh mobile dạng dọc. Thay avatar tại `public/images/profile/avatar.svg`.

CV hiện có tại `public/cv/Pham-Quang-Minh-CV-Backend.pdf` và `public/cv/Pham-Quang-Minh-CV-BA.pdf`; nút tải đã được bật. Nếu thay hoặc gỡ file, cập nhật các cờ tương ứng trong `src/data/profile.ts`.

Nội dung dự án, kỹ năng, giải thưởng và thông tin cá nhân nằm trong `src/data/`. Bản dịch giao diện nằm trong `src/i18n/en.ts` và `src/i18n/vi.ts`.

## Form liên hệ

Tạo tài khoản Resend, xác minh domain gửi mail, rồi đặt `RESEND_API_KEY` và `CONTACT_TO_EMAIL` trong `.env.local` hoặc Vercel. Endpoint kiểm tra dữ liệu bằng Zod và bỏ qua submission có honeypot. Khi endpoint chưa cấu hình, giao diện mở mailto để gửi bằng ứng dụng email.

## Deploy Vercel

Đưa repo lên GitHub, import vào Vercel và thêm các biến Resend nếu cần. Mỗi lần push lên nhánh production, Vercel tự build và deploy. Trước khi deploy thật, thay các placeholder và bổ sung CV nếu muốn cung cấp tải xuống.

## Các mục cần xác nhận

- TODO: MiniSocial dùng thời gian 12/2025–03/2026 theo CV Backend; CV BA ghi 12/2025–02/2026.
- TODO: bổ sung ba link GitHub cho MiniSocial.
- TODO: xác nhận có công khai số 0981712585 hay chỉ để email.
- TODO: cung cấp hai file CV được phép đăng công khai.
- TODO: cung cấp link demo nếu có, ảnh chân dung và xác nhận tagline.
- Chưa đưa microservices vào portfolio vì dữ liệu dự án không nêu kinh nghiệm này.
