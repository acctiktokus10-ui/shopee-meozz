export default function Home() {
  return (
    <div style={{
      background: "linear-gradient(to bottom,#fff1f6,#ffeef5)",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <div style={{
        maxWidth: "900px",
        margin: "auto"
      }}>

        <h1 style={{
          textAlign: "center",
          color: "#ff3d7f",
          fontSize: "52px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}>
          Đổi Link Săn Sale Shopee Giảm 20-25% Cùng Mezz
        </h1>

        {/* Input */}
        <input
          type="text"
          placeholder="Dán link shopee để nhận voucher..."
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            border: "2px solid #eee",
            fontSize: "20px",
            background: "#fff"
          }}
        />

        {/* Button */}
        <button style={{
          width: "100%",
          marginTop: "20px",
          padding: "22px",
          border: "none",
          borderRadius: "22px",
          background: "linear-gradient(90deg,#c77dff,#9d4edd)",
          color: "#fff",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          ✨ CHUYỂN ĐỔI NGAY
        </button>

        {/* Result */}
        <div style={{
          marginTop: "25px",
          background: "#f7fff7",
          border: "3px solid #41c95b",
          borderRadius: "24px",
          padding: "24px"
        }}>

          <div style={{
            color: "#28a745",
            fontSize: "28px",
            fontWeight: "bold"
          }}>
            ✅ Đã chuyển đổi xong
          </div>

          <div style={{
            marginTop: "16px",
            fontSize: "20px",
            color: "#444"
          }}>
            https://s.shopee.vn/....
          </div>

          <div style={{
            display: "flex",
            gap: "18px",
            marginTop: "25px"
          }}>

            <button style={{
              flex: 1,
              padding: "20px",
              border: "none",
              borderRadius: "18px",
              background: "linear-gradient(90deg,#43d854,#23b142)",
              color: "#fff",
              fontSize: "22px",
              fontWeight: "bold"
            }}>
              🔗 SAO CHÉP LINK
            </button>

            <button style={{
              flex: 1,
              padding: "20px",
              border: "none",
              borderRadius: "18px",
              background: "linear-gradient(90deg,#1877f2,#0d5be1)",
              color: "#fff",
              fontSize: "22px",
              fontWeight: "bold"
            }}>
              f ĐẾN BÀI ĐĂNG FB
            </button>

          </div>
        </div>

        {/* Tip */}
        <div style={{
          marginTop: "25px",
          padding: "24px",
          border: "2px dashed #ffb3cc",
          borderRadius: "24px",
          background: "#fff8fb",
          color: "#555",
          lineHeight: "1.8",
          fontSize: "20px"
        }}>
          💡 Bạn hãy nhấn “🔗 Sao chép link” và dán vào dưới bình luận của bài viết này sau đó click vào link đó app mở rồi mua hàng nhé:
          <br /><br />
          <a href="#" style={{
            color: "#0d5be1"
          }}>
            https://www.facebook.com/....
          </a>
        </div>

        {/* Voucher 1 */}
        <div style={{
          marginTop: "25px",
          display: "flex",
          overflow: "hidden",
          borderRadius: "26px",
          background: "#fff",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
        }}>

          <div style={{
            width: "180px",
            background: "linear-gradient(to bottom,#ff9f43,#ff5a00)",
            color: "#fff",
            textAlign: "center",
            padding: "24px 10px",
            fontSize: "26px",
            fontWeight: "bold"
          }}>
            <div style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#1877f2",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "14px"
            }}>
              f
            </div>

            Facebook
          </div>

          <div style={{
            flex: 1,
            padding: "24px"
          }}>
            <div style={{
              fontSize: "34px",
              fontWeight: "bold",
              color: "#ff5a00"
            }}>
              Giảm 20% – Tối đa 250kđ
            </div>

            <div style={{
              marginTop: "10px",
              fontSize: "24px"
            }}>
              Đơn tối thiểu 50kđ
            </div>

            <div style={{
              display: "inline-block",
              marginTop: "12px",
              border: "2px solid #ff9f43",
              color: "#ff7b00",
              padding: "6px 14px",
              borderRadius: "10px",
              fontSize: "18px"
            }}>
              Độc Quyền Facebook
            </div>

            <div style={{
              marginTop: "16px",
              color: "#777",
              fontSize: "20px"
            }}>
              Hết hạn trong: Còn 1 ngày
            </div>
          </div>
        </div>

        {/* Tip text */}
        <div style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#d4a017",
          fontSize: "32px",
          fontWeight: "bold",
          fontStyle: "italic"
        }}>
          💡 Mẹo săn Voucher 20-25% Shopee × Facebook
        </div>

      </div>
    </div>
  );
}
