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
  },
  {
    id: 2,
    platform: "Facebook",
    discount: "Giảm 22% – Tối đa 500kđ",
    minOrder: "Đơn từ thiểu 50kđ",
    tag: "Độc Quyền Facebook",
    expiry: "Còn 1 ngày",
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
      {/* Header with hearts and sparkles */}
      <div style={{ position: "relative", textAlign: "center", paddingTop: "30px", paddingBottom: "10px" }}>
        {/* Big hearts on sides */}
        <span style={{ position: "absolute", left: "16px", top: "24px", fontSize: "36px", lineHeight: 1 }}>💗</span>
        <span style={{ position: "absolute", left: "56px", top: "62px", fontSize: "22px", lineHeight: 1 }}>💗</span>
        <span style={{ position: "absolute", right: "16px", top: "24px", fontSize: "36px", lineHeight: 1 }}>💗</span>
        <span style={{ position: "absolute", right: "56px", top: "62px", fontSize: "22px", lineHeight: 1 }}>💗</span>

        {/* Sparkle dots scattered */}
        {[
          { left: "10px", top: "10px" }, { left: "40px", top: "50px" }, { left: "75px", top: "18px" },
          { left: "110px", top: "60px" }, { left: "145px", top: "12px" },
        ].map((pos, i) => (
          <span key={`sl${i}`} style={{ position: "absolute", ...pos, fontSize: "12px", color: "#ff69b4", opacity: 0.75 }}>✦</span>
        ))}
        {[
          { right: "10px", top: "10px" }, { right: "40px", top: "50px" }, { right: "75px", top: "18px" },
          { right: "110px", top: "60px" }, { right: "145px", top: "12px" },
        ].map((pos, i) => (
          <span key={`sr${i}`} style={{ position: "absolute", ...pos, fontSize: "12px", color: "#ff69b4", opacity: 0.75 }}>✦</span>
        ))}

        <h1 style={{
          display: "inline-block",
          fontSize: "clamp(22px, 6.5vw, 32px)",
          fontWeight: "800",
          fontStyle: "italic",
          background: "linear-gradient(90deg, #ff3d7f, #c62a7a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.35,
          maxWidth: "340px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          Đổi Link Săn Sale Shopee<br />Giảm 20-25% Cùng Mezz
        </h1>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "500px", margin: "18px auto 0", padding: "0 16px" }}>

        {/* Tabs */}
        <div style={{
          display: "flex",
          background: "#fff",
          borderRadius: "50px",
          padding: "6px",
          boxShadow: "0 2px 14px rgba(0,0,0,0.09)",
          gap: "0",
        }}>
          <button
            onClick={() => setActiveTab("convert")}
            style={{
              flex: 1,
              padding: "13px 0",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: "16px",
              transition: "all 0.2s",
              background: activeTab === "convert" ? "linear-gradient(90deg,#c77dff,#9d4edd)" : "transparent",
              color: activeTab === "convert" ? "#fff" : "#bbb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
            }}
          >
            <span style={{ fontSize: "17px" }}>🔗</span> Chuyển link
          </button>
          <button
            onClick={() => setActiveTab("voucher")}
            style={{
              flex: 1,
              padding: "13px 0",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: "16px",
              transition: "all 0.2s",
              background: activeTab === "voucher" ? "linear-gradient(90deg,#c77dff,#9d4edd)" : "transparent",
              color: activeTab === "voucher" ? "#fff" : "#bbb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
            }}
          >
            <span style={{ fontSize: "17px" }}>🎁</span> Mã giảm giá
          </button>
        </div>

        {/* ── CONVERT TAB ── */}
        {activeTab === "convert" && (
          <div>
            {/* Input card */}
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "18px 18px 16px",
              marginTop: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              {/* Input row */}
              <div style={{ position: "relative" }}>
                <span style={{
                  position: "absolute", left: "14px", top: "50%",
                  transform: "translateY(-50%)", fontSize: "19px", opacity: 0.45,
                }}>🔗</span>
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
                    boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={handlePaste}
                  title="Dán từ clipboard"
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    opacity: 0.45,
                    padding: "4px",
                  }}
                >📋</button>
              </div>

              {/* Convert button */}
              <button
                onClick={handleConvert}
                disabled={loading}
                style={{
                  width: "100%",
                  marginTop: "14px",
                  padding: "18px",
                  border: "none",
                  borderRadius: "16px",
                  background: loading ? "#ccc" : "linear-gradient(90deg,#c77dff,#9d4edd)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "800",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  letterSpacing: "0.5px",
                  transition: "opacity 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {loading ? "⏳ Đang xử lý..." : <><span style={{ fontSize: "20px" }}>✨</span> CHUYỂN ĐỔI NGAY</>}
              </button>

              <p style={{ textAlign: "center", color: "#c0c0c0", fontSize: "13px", marginTop: "10px", marginBottom: 0 }}>
                Chưa đến 1 giây là xong, hãy nhập 1 link thôi bạn nhé
              </p>
            </div>

            {/* Result box */}
            {result && (
              <div style={{
                marginTop: "16px",
                background: result.success ? "#f0fff4" : "#fff5f5",
                border: `2.5px solid ${result.success ? "#41c95b" : "#fc8181"}`,
                borderRadius: "20px",
                padding: "18px 20px 20px",
              }}>
                {result.success ? (
                  <>
                    {/* Success header */}
                    <div style={{
                      color: "#22863a",
                      fontSize: "17px",
                      fontWeight: "800",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}>
                      <span style={{ fontSize: "20px" }}>✅</span> Đã chuyển đổi xong
                    </div>

                    {/* Affiliate link text */}
                    <div style={{
                      fontSize: "13px",
                      color: "#333",
                      wordBreak: "break-all",
                      lineHeight: 1.65,
                    }}>
                      {result.affiliateLink}
                    </div>

                    {/* Action buttons */}
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
                          gap: "7px",
                        }}
                      >
                        <span style={{
                          width: "22px", height: "22px", background: "#fff",
                          borderRadius: "50%", display: "inline-flex",
                          alignItems: "center", justifyContent: "center",
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

            {/* Tip / instruction box */}
            <div style={{
              marginTop: "16px",
              padding: "16px 18px",
              border: "none",
              borderRadius: "18px",
              background: "#fff",
              color: "#555",
              lineHeight: "1.75",
              fontSize: "14.5px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}>
              💡 Bạn hãy nhấn "<span style={{ color: "#f97316", fontWeight: "700" }}>🔗 Sao chép link</span>" và dán vào dưới bình luận của bài viết này
              sau đó click vào link đó app mở rồi mua hàng nhé:
              <br />
              <a
                href={FB_POST_URL}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0d5be1", wordBreak: "break-all", textDecoration: "underline" }}
              >
                {FB_POST_URL}
              </a>
            </div>

            {/* Voucher cards — shown in convert tab (non-selectable, radio shown empty on right) */}
            {VOUCHERS.map((v) => (
              <VoucherCard key={v.id} voucher={v} showRadio={true} />
            ))}

            {/* Tip accordion */}
            <div
              onClick={() => setTipOpen(!tipOpen)}
              style={{
                marginTop: "14px",
                padding: "15px 20px",
                background: "#fffde7",
                borderRadius: tipOpen ? "16px 16px 0 0" : "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1.5px solid #ffe082",
              }}
            >
              <span style={{ color: "#b7791f", fontWeight: "700", fontSize: "14.5px" }}>
                💡 <u>Mẹo săn Voucher 20-25% Shopee × Facebook</u>
              </span>
              <span style={{
                color: "#b7791f",
                fontSize: "18px",
                transition: "transform 0.25s",
                display: "inline-block",
                transform: tipOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}>▾</span>
            </div>
            {tipOpen && (
              <div style={{
                background: "#fffef5",
                border: "1.5px solid #ffe082",
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

        {/* ── VOUCHER TAB ── */}
        {activeTab === "voucher" && (
          <div style={{ marginTop: "18px" }}>
            <p style={{ textAlign: "center", color: "#999", fontSize: "14px", marginBottom: "16px" }}>
              Chọn voucher bạn muốn sử dụng khi mua hàng
            </p>
            {VOUCHERS.map((v) => (
              <VoucherCard
                key={v.id}
                voucher={v}
                showRadio={true}
                selectable={true}
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

function VoucherCard({ voucher, showRadio, selectable, selected, onSelect }) {
  return (
    <div
      onClick={selectable ? onSelect : undefined}
      style={{
        marginTop: "14px",
        display: "flex",
        borderRadius: "18px",
        overflow: "visible",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        background: "#fff",
        cursor: selectable ? "pointer" : "default",
        border: selected ? "2.5px solid #9d4edd" : "2.5px solid transparent",
        transition: "border 0.15s",
        position: "relative",
        clipPath: "none",
      }}
    >
      {/* Top notch */}
      <div style={{
        position: "absolute",
        left: "154px",
        top: "-11px",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "linear-gradient(160deg, #ffd6e8 0%, #fce4f3 40%, #f9d6f5 70%, #ffd6e0 100%)",
        zIndex: 3,
        boxShadow: "inset 0 0 0 1.5px rgba(255,180,200,0.3)",
      }} />
      {/* Bottom notch */}
      <div style={{
        position: "absolute",
        left: "154px",
        bottom: "-11px",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "linear-gradient(160deg, #ffd6e8 0%, #fce4f3 40%, #f9d6f5 70%, #ffd6e0 100%)",
        zIndex: 3,
        boxShadow: "inset 0 0 0 1.5px rgba(255,180,200,0.3)",
      }} />

      {/* Left: orange section with FB icon */}
      <div style={{
        width: "160px",
        minWidth: "160px",
        background: "linear-gradient(150deg,#ffb347,#ff5a00)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "22px 12px",
        gap: "10px",
        borderRadius: "15px 0 0 15px",
      }}>
        {/* Facebook circle */}
        <div style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "#1877f2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 10px rgba(24,119,242,0.35)",
        }}>
          <span style={{ color: "#fff", fontSize: "40px", fontWeight: "900", lineHeight: 1, fontFamily: "Georgia, serif" }}>f</span>
        </div>
        <span style={{ fontWeight: "800", fontSize: "17px", letterSpacing: "0.3px" }}>{voucher.platform}</span>
      </div>

      {/* Dashed divider */}
      <div style={{
        width: "1px",
        alignSelf: "stretch",
        background: "repeating-linear-gradient(to bottom, #e0e0e0 0px, #e0e0e0 5px, transparent 5px, transparent 11px)",
        margin: "12px 0",
        flexShrink: 0,
      }} />

      {/* Right: voucher info */}
      <div style={{ flex: 1, padding: "18px 14px 18px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "17px", fontWeight: "800", color: "#ff5200" }}>{voucher.discount}</div>
        <div style={{ fontSize: "13.5px", color: "#666", marginTop: "5px" }}>{voucher.minOrder}</div>
        <div style={{
          display: "inline-block",
          marginTop: "8px",
          border: "1.5px solid #ffb347",
          color: "#e07000",
          padding: "3px 10px",
          borderRadius: "7px",
          fontSize: "12px",
          fontWeight: "600",
          width: "fit-content",
        }}>{voucher.tag}</div>
        <div style={{ marginTop: "9px", color: "#bbb", fontSize: "13px" }}>Hết hạn trong: {voucher.expiry}</div>
      </div>

      {/* Radio button on right */}
      {showRadio && (
        <div style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "16px",
          flexShrink: 0,
        }}>
          <div style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            border: `2.5px solid ${selected ? "#9d4edd" : "#ddd"}`,
            background: selected ? "#9d4edd" : "#fff",
            transition: "all 0.15s",
            flexShrink: 0,
          }} />
        </div>
      )}
    </div>
  );
}
