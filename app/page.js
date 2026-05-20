"use client";
import { useState } from "react";

const FB_POST_URL = "https://www.facebook.com/share/p/18o9LakWMj/?mibextid=wwXlfr";
const AFFILIATE_ID = "17395950528";
const SUB_ID = "MEOZZ";

const VOUCHERS = [
  {
    id: 1,
    platform: "Facebook",
    discount: "Giảm 20% – Tối đa 250kđ",
    minOrder: "Đơn từ thiểu 50kđ",
    tag: "Độc Quyền Facebook",
    expiry: "Còn 1 ngày",
    selected: false,
  },
  {
    id: 2,
    platform: "Facebook",
    discount: "Giảm 22% – Tối đa 500kđ",
    minOrder: "Đơn từ thiểu 50kđ",
    tag: "Độc Quyền Facebook",
    expiry: "Còn 1 ngày",
    selected: false,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("convert");
  const [inputLink, setInputLink] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [tipOpen, setTipOpen] = useState(false);

  async function handleConvert() {
    if (!inputLink.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links: [inputLink.trim()] }),
      });
      const data = await res.json();
      const r = data.results?.[0];
      setResult(r || { success: false, error: "Lỗi không xác định" });
    } catch {
      setResult({ success: false, error: "Không thể kết nối máy chủ" });
    }
    setLoading(false);
  }

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText();
      setInputLink(text);
    } catch {}
  }

  async function handleCopy() {
    if (!result?.affiliateLink) return;
    await navigator.clipboard.writeText(result.affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #ffd6e8 0%, #fce4f3 40%, #f9d6f5 70%, #ffd6e0 100%)",
      fontFamily: "'Be Vietnam Pro', Arial, sans-serif",
      paddingBottom: "40px",
    }}>
      {/* Sparkles top */}
      <div style={{ position: "relative", textAlign: "center", paddingTop: "28px", paddingBottom: "10px" }}>
        {/* Hearts decoration */}
        <span style={{ position: "absolute", left: "18px", top: "22px", fontSize: "32px" }}>💗</span>
        <span style={{ position: "absolute", left: "52px", top: "54px", fontSize: "20px" }}>💗</span>
        <span style={{ position: "absolute", right: "18px", top: "22px", fontSize: "32px" }}>💗</span>
        <span style={{ position: "absolute", right: "52px", top: "54px", fontSize: "20px" }}>💗</span>
        {/* Sparkles */}
        {["14px","80px","160px","260px","330px"].map((left, i) => (
          <span key={i} style={{ position: "absolute", left, top: i % 2 === 0 ? "12px" : "40px", fontSize: "13px", color: "#ff69b4", opacity: 0.7 }}>✦</span>
        ))}
        {["14px","80px","160px","260px","330px"].map((right, i) => (
          <span key={i} style={{ position: "absolute", right, top: i % 2 === 0 ? "12px" : "40px", fontSize: "13px", color: "#ff69b4", opacity: 0.7 }}>✦</span>
        ))}

        <h1 style={{
          display: "inline-block",
          fontSize: "clamp(22px, 6vw, 30px)",
          fontWeight: "800",
          fontStyle: "italic",
          background: "linear-gradient(90deg, #ff3d7f, #c62a7a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.3,
          maxWidth: "340px",
          margin: "0 auto",
        }}>
          Đổi Link Săn Sale Shopee<br />Giảm 20-25% Cùng Mezz
        </h1>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: "500px", margin: "18px auto 0", padding: "0 16px" }}>
        <div style={{
          display: "flex",
          background: "#fff",
          borderRadius: "50px",
          padding: "6px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}>
          <button
            onClick={() => setActiveTab("convert")}
            style={{
              flex: 1,
              padding: "12px 0",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: "16px",
              transition: "all 0.2s",
              background: activeTab === "convert" ? "linear-gradient(90deg,#c77dff,#9d4edd)" : "transparent",
              color: activeTab === "convert" ? "#fff" : "#aaa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
            }}
          >
            <span>🔗</span> Chuyển link
          </button>
          <button
            onClick={() => setActiveTab("voucher")}
            style={{
              flex: 1,
              padding: "12px 0",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: "16px",
              transition: "all 0.2s",
              background: activeTab === "voucher" ? "linear-gradient(90deg,#c77dff,#9d4edd)" : "transparent",
              color: activeTab === "voucher" ? "#fff" : "#aaa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
            }}
          >
            <span>🎁</span> Mã giảm giá
          </button>
        </div>

        {/* Convert Tab */}
        {activeTab === "convert" && (
          <div>
            {/* Input card */}
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "16px",
              marginTop: "18px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "20px", opacity: 0.5 }}>🔗</span>
                <input
                  type="text"
                  value={inputLink}
                  onChange={e => setInputLink(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleConvert()}
                  placeholder="Dán link shopee để nhận voucher..."
                  style={{
                    width: "100%",
                    padding: "15px 50px 15px 44px",
                    borderRadius: "14px",
                    border: "1.5px solid #eee",
                    fontSize: "15px",
                    background: "#fafafa",
                    outline: "none",
                    color: "#333",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={handlePaste}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    opacity: 0.5,
                    padding: "4px",
                  }}
                  title="Dán từ clipboard"
                >📋</button>
              </div>

              <button
                onClick={handleConvert}
                disabled={loading}
                style={{
                  width: "100%",
                  marginTop: "14px",
                  padding: "18px",
                  border: "none",
                  borderRadius: "16px",
                  background: loading ? "#bbb" : "linear-gradient(90deg,#c77dff,#9d4edd)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "800",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  letterSpacing: "0.5px",
                  transition: "opacity 0.2s",
                }}
              >
                {loading ? "⏳ Đang xử lý..." : "✨ CHUYỂN ĐỔI NGAY"}
              </button>

              <p style={{ textAlign: "center", color: "#bbb", fontSize: "13px", marginTop: "10px" }}>
                Chưa đến 1 giây là xong, hãy nhập 1 link thôi bạn nhé
              </p>
            </div>

            {/* Result */}
            {result && (
              <div style={{
                marginTop: "16px",
                background: result.success ? "#f0fff4" : "#fff5f5",
                border: `2.5px solid ${result.success ? "#41c95b" : "#fc8181"}`,
                borderRadius: "20px",
                padding: "20px",
              }}>
                {result.success ? (
                  <>
                    <div style={{ color: "#22863a", fontSize: "18px", fontWeight: "800", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "22px" }}>✅</span> Đã chuyển đổi xong
                    </div>
                    <div style={{
                      marginTop: "12px",
                      fontSize: "13px",
                      color: "#444",
                      wordBreak: "break-all",
                      background: "#e6f7ec",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      lineHeight: 1.6,
                    }}>
                      {result.affiliateLink}
                    </div>
                    <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                      <button
                        onClick={handleCopy}
                        style={{
                          flex: 1,
                          padding: "15px 0",
                          border: "none",
                          borderRadius: "14px",
                          background: copied ? "#169b2e" : "linear-gradient(90deg,#43d854,#23b142)",
                          color: "#fff",
                          fontSize: "15px",
                          fontWeight: "800",
                          cursor: "pointer",
                          fontFamily: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        🔗 {copied ? "ĐÃ SAO CHÉP!" : "SAO CHÉP LINK"}
                      </button>
                      <a
                        href={FB_POST_URL}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1,
                          padding: "15px 0",
                          border: "none",
                          borderRadius: "14px",
                          background: "linear-gradient(90deg,#1877f2,#0d5be1)",
                          color: "#fff",
                          fontSize: "15px",
                          fontWeight: "800",
                          cursor: "pointer",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{
                          width: "22px", height: "22px", background: "#fff", borderRadius: "50%",
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          color: "#1877f2", fontWeight: "900", fontSize: "14px",
                        }}>f</span>
                        ĐẾN BÀI ĐĂNG FB
                      </a>
                    </div>
                  </>
                ) : (
                  <div style={{ color: "#c53030", fontSize: "16px", fontWeight: "700" }}>
                    ❌ {result.error}
                  </div>
                )}
              </div>
            )}

            {/* Tip box */}
            <div style={{
              marginTop: "16px",
              padding: "16px 18px",
              border: "2px dashed #ffb3cc",
              borderRadius: "18px",
              background: "#fff8fb",
              color: "#555",
              lineHeight: "1.7",
              fontSize: "14px",
            }}>
              💡 Bạn hãy nhấn "<span style={{ color: "#f97316", fontWeight: "700" }}>🔗 Sao chép link</span>" và dán vào dưới bình luận của bài viết này sau đó click vào link đó app mở rồi mua hàng nhé:
              <br />
              <a href={FB_POST_URL} target="_blank" rel="noreferrer" style={{ color: "#0d5be1", wordBreak: "break-all" }}>
                {FB_POST_URL}
              </a>
            </div>

            {/* Voucher cards */}
            {VOUCHERS.map((v) => (
              <VoucherCard key={v.id} voucher={v} />
            ))}

            {/* Tip accordion */}
            <div
              onClick={() => setTipOpen(!tipOpen)}
              style={{
                marginTop: "16px",
                padding: "16px 20px",
                background: "#fffbea",
                borderRadius: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1.5px solid #ffe58f",
              }}
            >
              <span style={{ color: "#b7791f", fontWeight: "700", fontSize: "15px" }}>
                💡 <u>Mẹo săn Voucher 20-25% Shopee × Facebook</u>
              </span>
              <span style={{ color: "#b7791f", fontSize: "18px", transition: "transform 0.2s", transform: tipOpen ? "rotate(180deg)" : "none" }}>▾</span>
            </div>
            {tipOpen && (
              <div style={{
                background: "#fffef0",
                border: "1.5px solid #ffe58f",
                borderTop: "none",
                borderRadius: "0 0 16px 16px",
                padding: "16px 20px",
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.8,
              }}>
                <b>Bước 1:</b> Dán link Shopee vào ô trên và nhấn <b>Chuyển Đổi Ngay</b>.<br />
                <b>Bước 2:</b> Sao chép link affiliate vừa tạo.<br />
                <b>Bước 3:</b> Dán link vào bình luận bài đăng Facebook.<br />
                <b>Bước 4:</b> Click vào link đó → app Shopee mở → mua hàng → voucher tự áp dụng! 🎉
              </div>
            )}
          </div>
        )}

        {/* Voucher Tab */}
        {activeTab === "voucher" && (
          <div style={{ marginTop: "18px" }}>
            <p style={{ textAlign: "center", color: "#888", fontSize: "14px", marginBottom: "16px" }}>
              Chọn voucher bạn muốn sử dụng khi mua hàng
            </p>
            {VOUCHERS.map((v) => (
              <VoucherCard
                key={v.id}
                voucher={v}
                selectable
                selected={selectedVoucher === v.id}
                onSelect={() => setSelectedVoucher(v.id === selectedVoucher ? null : v.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function VoucherCard({ voucher, selectable, selected, onSelect }) {
  return (
    <div
      onClick={selectable ? onSelect : undefined}
      style={{
        marginTop: "14px",
        display: "flex",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        background: "#fff",
        cursor: selectable ? "pointer" : "default",
        border: selected ? "2.5px solid #9d4edd" : "2.5px solid transparent",
        transition: "border 0.15s",
        position: "relative",
      }}
    >
      {/* Left notch effect */}
      <div style={{
        position: "absolute",
        left: "148px",
        top: "-10px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "linear-gradient(160deg, #ffd6e8 0%, #fce4f3 40%, #f9d6f5 70%, #ffd6e0 100%)",
        zIndex: 2,
      }} />
      <div style={{
        position: "absolute",
        left: "148px",
        bottom: "-10px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "linear-gradient(160deg, #ffd6e8 0%, #fce4f3 40%, #f9d6f5 70%, #ffd6e0 100%)",
        zIndex: 2,
      }} />

      {/* Left section */}
      <div style={{
        width: "158px",
        minWidth: "158px",
        background: "linear-gradient(160deg,#ff9f43,#ff5a00)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 12px",
        gap: "10px",
      }}>
        <div style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "#1877f2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{ color: "#fff", fontSize: "38px", fontWeight: "900", lineHeight: 1 }}>f</span>
        </div>
        <span style={{ fontWeight: "800", fontSize: "17px" }}>{voucher.platform}</span>
      </div>

      {/* Dashed divider */}
      <div style={{
        width: "1px",
        background: "repeating-linear-gradient(to bottom, #e0e0e0 0px, #e0e0e0 6px, transparent 6px, transparent 12px)",
        alignSelf: "stretch",
        margin: "10px 0",
      }} />

      {/* Right section */}
      <div style={{ flex: 1, padding: "18px 16px" }}>
        <div style={{ fontSize: "17px", fontWeight: "800", color: "#ff5a00" }}>{voucher.discount}</div>
        <div style={{ fontSize: "14px", color: "#555", marginTop: "5px" }}>{voucher.minOrder}</div>
        <div style={{
          display: "inline-block",
          marginTop: "8px",
          border: "1.5px solid #ff9f43",
          color: "#ff7b00",
          padding: "3px 10px",
          borderRadius: "7px",
          fontSize: "12px",
          fontWeight: "600",
        }}>{voucher.tag}</div>
        <div style={{ marginTop: "10px", color: "#aaa", fontSize: "13px" }}>Hết hạn trong: {voucher.expiry}</div>
      </div>

      {/* Radio */}
      {selectable && (
        <div style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "16px",
        }}>
          <div style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            border: `2.5px solid ${selected ? "#9d4edd" : "#ddd"}`,
            background: selected ? "#9d4edd" : "#fff",
            transition: "all 0.15s",
          }} />
        </div>
      )}
    </div>
  );
}
