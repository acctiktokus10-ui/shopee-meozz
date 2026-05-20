import "./globals.css";

export const metadata = {
  title: "Săn Mã Giảm Giá Shopee 20-25%",
  description: "🎁 Mua hàng Shopee mà không biết mẹo này thì phí lắm! Chuyển link ngay — nhận mã giảm giá 20-25% cho hàng ngàn sản phẩm yêu thích. Nhanh tay kẻo hết!",
  openGraph: {
    title: "Săn Mã Giảm Giá Shopee 20-25%",
    description: "🎁 Mua hàng Shopee mà không biết mẹo này thì phí lắm! Chuyển link ngay — nhận mã giảm giá 20-25% cho hàng ngàn sản phẩm yêu thích. Nhanh tay kẻo hết!",
    siteName: "Shopee Meozz",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
