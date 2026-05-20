<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shopee Voucher UI</title>
<style>
body{
  background: linear-gradient(to bottom,#fff1f6,#ffeef5);
  font-family: Arial, sans-serif;
  padding:20px;
}
.container{
  max-width:900px;
  margin:auto;
}
.title{
  text-align:center;
  color:#ff3d7f;
  font-size:52px;
  font-weight:bold;
  margin-bottom:30px;
}
.input-box input{
  width:100%;
  padding:18px;
  border-radius:18px;
  border:2px solid #eee;
  font-size:20px;
  outline:none;
  background:#fff;
}
.convert-btn{
  width:100%;
  margin-top:20px;
  padding:22px;
  border:none;
  border-radius:22px;
  background:linear-gradient(90deg,#c77dff,#9d4edd);
  color:#fff;
  font-size:22px;
  font-weight:bold;
}
.result-box{
  margin-top:25px;
  background:#f7fff7;
  border:3px solid #41c95b;
  border-radius:24px;
  padding:24px;
}
.success-text{
  color:#28a745;
  font-size:28px;
  font-weight:bold;
}
.result-link{
  margin-top:16px;
  font-size:20px;
  color:#444;
}
.action-buttons{
  display:flex;
  gap:18px;
  margin-top:25px;
}
.copy-btn{
  flex:1;
  padding:20px;
  border:none;
  border-radius:18px;
  background:linear-gradient(90deg,#43d854,#23b142);
  color:#fff;
  font-size:22px;
  font-weight:bold;
}
.fb-btn{
  flex:1;
  padding:20px;
  border:none;
  border-radius:18px;
  background:linear-gradient(90deg,#1877f2,#0d5be1);
  color:#fff;
  font-size:22px;
  font-weight:bold;
}
.tip-box{
  margin-top:25px;
  padding:24px;
  border:2px dashed #ffb3cc;
  border-radius:24px;
  background:#fff8fb;
  color:#555;
  line-height:1.8;
  font-size:20px;
}
.tip-box a{
  color:#0d5be1;
}
.voucher-item{
  margin-top:25px;
  display:flex;
  overflow:hidden;
  border-radius:26px;
  background:#fff;
  box-shadow:0 6px 18px rgba(0,0,0,0.08);
}
.voucher-left{
  width:180px;
  background:linear-gradient(to bottom,#ff9f43,#ff5a00);
  color:#fff;
  text-align:center;
  padding:24px 10px;
  font-size:26px;
  font-weight:bold;
}
.fb-circle{
  width:90px;
  height:90px;
  border-radius:50%;
  background:#1877f2;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:60px;
  font-weight:bold;
  margin-bottom:14px;
}
.voucher-right{
  flex:1;
  padding:24px;
}
.voucher-title{
  font-size:34px;
  font-weight:bold;
  color:#ff5a00;
}
.voucher-desc{
  margin-top:10px;
  font-size:24px;
}
.tag{
  display:inline-block;
  margin-top:12px;
  border:2px solid #ff9f43;
  color:#ff7b00;
  padding:6px 14px;
  border-radius:10px;
  font-size:18px;
}
.expire{
  margin-top:16px;
  color:#777;
  font-size:20px;
}
.voucher-tip{
  margin-top:20px;
  text-align:center;
  color:#d4a017;
  font-size:32px;
  font-weight:bold;
  font-style:italic;
}
</style>
</head>
<body>
<div class="container">
<div class="title">Đổi Link Săn Sale Shopee Giảm 20-25% Cùng Mezz</div>

<div class="input-box">
<input type="text" placeholder="Dán link shopee để nhận voucher..." />
</div>

<button class="convert-btn">✨ CHUYỂN ĐỔI NGAY</button>

<div class="result-box">
<div class="success-text">✅ Đã chuyển đổi xong</div>
<div class="result-link">https://s.shopee.vn/....</div>

<div class="action-buttons">
<button class="copy-btn">🔗 SAO CHÉP LINK</button>
<button class="fb-btn">f ĐẾN BÀI ĐĂNG FB</button>
</div>
</div>

<div class="tip-box">
💡 Bạn hãy nhấn “🔗 Sao chép link” và dán vào dưới bình luận của bài viết này sau đó click vào link đó app mở rồi mua hàng nhé:
<br><br>
<a href="#">https://www.facebook.com/....</a>
</div>

<div class="voucher-item">
<div class="voucher-left">
<div class="fb-circle">f</div>
Facebook
</div>
<div class="voucher-right">
<div class="voucher-title">Giảm 20% – Tối đa 250kđ</div>
<div class="voucher-desc">Đơn tối thiểu 50kđ</div>
<div class="tag">Độc Quyền Facebook</div>
<div class="expire">Hết hạn trong: Còn 1 ngày</div>
</div>
</div>

<div class="voucher-item">
<div class="voucher-left">
<div class="fb-circle">f</div>
Facebook
</div>
<div class="voucher-right">
<div class="voucher-title">Giảm 22% – Tối đa 500kđ</div>
<div class="voucher-desc">Đơn tối thiểu 50kđ</div>
<div class="tag">Độc Quyền Facebook</div>
<div class="expire">Hết hạn trong: Còn 1 ngày</div>
</div>
</div>

<div class="voucher-tip">
💡 Mẹo săn Voucher 20-25% Shopee × Facebook
</div>

</div>
</body>
</html>
