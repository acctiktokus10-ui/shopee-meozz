"use client";
import { useState } from "react";

const FB_POST_URL = "https://www.facebook.com/share/p/18o9LakWMj/?mibextid=wwXlfr";

const VOUCHERS = [
  {
    id: 1,
    platform: "Facebook",
    percent: 20,
    discount: "Giảm 20% Giảm tối đa 250kđ",
    minOrder: "Đơn tối thiểu 50kđ",
    tag: "Độc Quyền Facebook",
    usedPercent: 89,
    expiry: null,
  },
  {
    id: 2,
    platform: "Facebook",
    percent: 22,
    discount: "Giảm 22% Giảm tối đa 500kđ",
    minOrder: "Đơn tối thiểu 50kđ",
    tag: "Độc Quyền Facebook",
    usedPercent: 81,
    expiry: null,
  },
  {
    id: 3,
    platform: "Facebook",
    percent: 25,
    discount: "Giảm 25% Giảm tối đa 1trđ",
    minOrder: "Đơn tối thiểu 50kđ",
    tag: "Độc Quyền Facebook",
    usedPercent: null,
    expiry: "Còn 1 ngày",
  },
];

/* ── Real SVG icons ──────────────────────────────────── */

function IconLink({ size = 20, color = "#a78bfa" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function IconClipboard({ size = 20, color = "#999" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function IconGift({ size = 20, color = "#999" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function FacebookLogo({ size = 68 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="34" cy="34" r="34" fill="#1877F2" />
      <path
        d="M45 34C45 27.925 40.075 23 34 23C27.925 23 23 27.925 23 34C23 39.49 26.926 44.04 32.125 44.865V37.187H29.078V34H32.125V31.412C32.125 28.387 33.915 26.75 36.657 26.75C37.97 26.75 39.344 26.987 39.344 26.987V29.938H37.83C36.34 29.938 35.875 30.867 35.875 31.82V34H39.203L38.67 37.187H35.875V44.865C41.074 44.04 45 39.49 45 34Z"
        fill="white"
      />
    </svg>
  );
}

function ShopeeLogo({ size = 22 }) {
  /* Shopee's orange bag icon approximated as SVG */
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#EE4D2D" />
      <path
        d="M24 8C20.134 8 17 11.134 17 15H13C12.448 15 12 15.448 12 16L10.5 36C10.5 36.828 11.172 37.5 12 37.5H36C36.828 37.5 37.5 36.828 37.5 36L36 16C36 15.448 35.552 15 35 15H31C31 11.134 27.866 8 24 8ZM24 11C26.209 11 28 12.791 28 15H20C20 12.791 21.791 11 24 11ZM19.5 22.5C19.5 23.881 20.619 25 22 25C23.381 25 24.5 26.119 24.5 27.5C24.5 28.881 23.381 30 22 30C19.791 30 18 28.209 18 26H16C16 29.314 18.686 32 22 32C24.761 32 27 29.761 27 27.5C27 25.239 25.209 23 22.5 23C21.948 23 21.5 22.552 21.5 22C21.5 21.448 21.948 21 22.5 21C24.433 21 26 22.567 26 24.5H28C28 21.462 25.538 19 22.5 19C20.015 19 18 21.015 18 23.5L19.5 22.5Z"
        fill="white"
      />
    </svg>
  );
}

function SparkleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
    </svg>
  );
}

function CheckCircleIcon({ size = 22, color = "#22863a" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* ── Main page ───────────────────────────────────────── */

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

      {/* ── Header ── */}
      <div style={{ position: "relative", textAlign: "center", paddingTop: "28px", paddingBottom: "10px" }}>
        {/* Heart decorations – real SVG hearts */}
        {[
          { left: "14px", top: "18px", size: 32 },
          { left: "48px", top: "50px", size: 20 },
        ].map((h, i) => (
          <svg key={`hl${i}`} style={{ position: "absolute", left: h.left, top: h.top }} width={h.size} height={h.size} viewBox="0 0 24 24" fill="#ff6eb4" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ))}
        {[
          { right: "14px", top: "18px", size: 32 },
          { right: "48px", top: "50px", size: 20 },
        ].map((h, i) => (
          <svg key={`hr${i}`} style={{ position: "absolute", right: h.right, top: h.top }} width={h.size} height={h.size} viewBox="0 0 24 24" fill="#ff6eb4" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ))}

        {/* Star sparkles */}
        {[20, 70, 130, 200, 270, 330].map((left, i) => (
          <span key={`sl-${i}`} style={{ position: "absolute", left: `${left}px`, top: i % 2 === 0 ? "10px" : "40px", fontSize: "11px", color: "#ff69b4", opacity: 0.8 }}>✦</span>
        ))}
        {[20, 70, 130, 200, 270, 330].map((right, i) => (
          <span key={`sr-${i}`} style={{ position: "absolute", right: `${right}px`, top: i % 2 === 0 ? "10px" : "40px", fontSize: "11px", color: "#ff69b4", opacity: 0.8 }}>✦</span>
        ))}

        <h1 style={{
          display: "inline-block",
          fontSize: "clamp(15px, 4vw, 18px)",
          fontWeight: "800",
          fontStyle: "italic",
          background: "linear-gradient(90deg, #ff3d7f, #c62a7a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.2,
          maxWidth: "100%",
          margin: "0 auto",
          whiteSpace: "nowrap",
        }}>
          Đổi Link Săn Sale Shopee · Giảm 20-25% Cùng Mezz
        </h1>
      </div>

      <div style={{ maxWidth: "500px", margin: "18px auto 0", padding: "0 16px" }}>

        {/* ── Tabs ── */}
        <div style={{
          display: "flex",
          background: "#fff",
          borderRadius: "50px",
          padding: "6px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}>
          {[
            { key: "convert", label: "Chuyển link", Icon: () => <IconLink size={18} color={activeTab === "convert" ? "#fff" : "#aaa"} /> },
            { key: "voucher", label: "Mã giảm giá", Icon: () => <IconGift size={18} color={activeTab === "voucher" ? "#fff" : "#aaa"} /> },
          ].map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                flex: 1, padding: "12px 0", border: "none", borderRadius: "50px",
                cursor: "pointer", fontFamily: "inherit", fontWeight: "700", fontSize: "16px",
                transition: "all 0.2s",
                background: activeTab === key ? "linear-gradient(90deg,#c77dff,#9d4edd)" : "transparent",
                color: activeTab === key ? "#fff" : "#aaa",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
              }}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        {/* ── CONVERT TAB ── */}
        {activeTab === "convert" && (
          <div>
            {/* Input card */}
            <div style={{
              background: "#fff", borderRadius: "20px", padding: "16px",
              marginTop: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}>
                  <IconLink size={20} color="#c4b5fd" />
                </span>
                <input
                  type="text"
                  value={inputLink}
                  onChange={e => setInputLink(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleConvert()}
                  placeholder="Dán link shopee để nhận voucher..."
                  style={{
                    width: "100%", padding: "15px 50px 15px 44px", borderRadius: "14px",
                    border: "1.5px solid #eee", fontSize: "15px", background: "#fafafa",
                    outline: "none", color: "#333", fontFamily: "inherit", boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={handlePaste}
                  style={{
                    position: "absolute", right: "12px", top: "50%",
                    transform: "translateY(-50%)", background: "none", border: "none",
                    cursor: "pointer", padding: "4px", opacity: 0.5,
                  }}
                  title="Dán từ clipboard"
                >
                  <IconClipboard size={22} color="#666" />
                </button>
              </div>

              <button
                onClick={handleConvert}
                disabled={loading}
                style={{
                  width: "100%", marginTop: "14px", padding: "18px", border: "none",
                  borderRadius: "16px",
                  background: loading ? "#bbb" : "linear-gradient(90deg,#c77dff,#9d4edd)",
                  color: "#fff", fontSize: "18px", fontWeight: "800",
                  cursor: loading ? "not-allowed" : "pointer", fontFamily: "inherit",
                  letterSpacing: "0.5px", transition: "opacity 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                }}
              >
                {loading ? (
                  "⏳ Đang xử lý..."
                ) : (
                  <>
                    <SparkleIcon size={20} />
                    CHUYỂN ĐỔI NGAY
                  </>
                )}
              </button>

              <p style={{ textAlign: "center", color: "#bbb", fontSize: "13px", marginTop: "10px", marginBottom: 0 }}>
                Chưa đến 1 giây là xong, hãy nhập 1 link thôi bạn nhé
              </p>
            </div>

            {/* Result */}
            {result && (
              <>
                {result.success ? (
                  <div style={{
                    marginTop: "16px",
                    background: "#f0fff4",
                    border: "2.5px solid #41c95b",
                    borderRadius: "20px",
                    padding: "20px",
                  }}>
                    <div style={{ color: "#22863a", fontSize: "17px", fontWeight: "800", display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircleIcon size={22} color="#22863a" />
                      Đã chuyển đổi xong
                    </div>
                    <div style={{ marginTop: "12px", fontSize: "13px", color: "#444", wordBreak: "break-all", lineHeight: 1.6 }}>
                      {result.affiliateLink}
                    </div>
                    <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                      {/* Copy button */}
                      <button
                        onClick={handleCopy}
                        style={{
                          flex: 1, padding: "12px 0", border: "none", borderRadius: "14px",
                          background: copied ? "#169b2e" : "linear-gradient(90deg,#43d854,#23b142)",
                          color: "#fff", fontSize: "12px", fontWeight: "800",
                          cursor: "pointer", fontFamily: "inherit",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                        }}
                      >
                        <IconLink size={17} color="#fff" />
                        {copied ? "ĐÃ SAO CHÉP!" : "SAO CHÉP LINK"}
                      </button>

                      {/* FB button */}
                      <a
                        href={FB_POST_URL}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1, padding: "12px 0", border: "none", borderRadius: "14px",
                          background: "linear-gradient(90deg,#1877f2,#0d5be1)",
                          color: "#fff", fontSize: "12px", fontWeight: "800",
                          cursor: "pointer", textDecoration: "none",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                        }}
                      >
                        <FacebookLogo size={24} />
                        ĐẾN BÀI ĐĂNG FB
                      </a>
                    </div>
                  </div>
                ) : (
                  <div style={{
                    marginTop: "16px", background: "#fff5f5",
                    border: "2.5px solid #fc8181", borderRadius: "20px", padding: "20px",
                    color: "#c53030", fontSize: "16px", fontWeight: "700",
                  }}>
                    ❌ {result.error}
                  </div>
                )}

                {/* Tip box */}
                <div style={{
                  marginTop: "16px", padding: "10px 14px",
                  border: "2px dashed #ffb3cc", borderRadius: "18px",
                  background: "#fff8fb", color: "#555", lineHeight: "1.5", fontSize: "11px",
                }}>
                  💡 Nhấn "<span style={{ color: "#f97316", fontWeight: "700" }}>🔗 Sao chép link</span>" → dán vào bình luận bài FB bên dưới → click link → app Shopee mở → mua hàng nhé!
                </div>

                {/* Voucher cards after result */}
                {VOUCHERS.map((v) => (
                  <VoucherCard key={v.id} voucher={v} />
                ))}

                {/* Tip accordion → chuyển sang tab mã giảm giá */}
                <div
                  onClick={() => setActiveTab("voucher")}
                  style={{
                    marginTop: "16px", padding: "14px 20px",
                    background: "#fffbea", borderRadius: "16px",
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "space-between", border: "1.5px solid #ffe58f",
                  }}
                >
                  <span style={{ color: "#b7791f", fontWeight: "700", fontSize: "14px" }}>
                    💡 <u>Mẹo săn Voucher 20-25% Shopee × Facebook</u>
                  </span>
                  <span style={{ color: "#b7791f", fontSize: "18px" }}>›</span>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── VOUCHER TAB ── */}
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

/* ── VoucherCard ─────────────────────────────────────── */

function VoucherCard({ voucher, selectable, selected, onSelect }) {
  return (
    <div
      onClick={selectable ? onSelect : undefined}
      style={{
        marginTop: "12px",
        display: "flex",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 3px 12px rgba(0,0,0,0.09)",
        background: "#fff",
        cursor: selectable ? "pointer" : "default",
        border: selected ? "2px solid #9d4edd" : "2px solid transparent",
        transition: "border 0.15s",
        position: "relative",
        minHeight: "90px",
      }}
    >
      {/* Notch circles for ticket effect */}
      {[{ top: "-9px" }, { bottom: "-9px" }].map((pos, i) => (
        <div key={i} style={{
          position: "absolute", left: "108px", ...pos,
          width: "18px", height: "18px", borderRadius: "50%",
          background: "linear-gradient(160deg, #ffd6e8 0%, #fce4f3 40%, #f9d6f5 70%, #ffd6e0 100%)",
          zIndex: 2,
        }} />
      ))}

      {/* Left orange section */}
      <div style={{
        width: "116px", minWidth: "116px",
        background: "linear-gradient(160deg,#ff9f43,#ee5a00)",
        color: "#fff",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "14px 8px", gap: "6px",
      }}>
        <FacebookLogo size={52} />
        <span style={{ fontWeight: "800", fontSize: "13px", letterSpacing: "0.3px" }}>{voucher.platform}</span>
      </div>

      {/* Dashed divider */}
      <div style={{
        width: "1px",
        background: "repeating-linear-gradient(to bottom, #ddd 0px, #ddd 5px, transparent 5px, transparent 10px)",
        alignSelf: "stretch",
        margin: "8px 0",
      }} />

      {/* Right content */}
      <div style={{ flex: 1, padding: "12px 12px 10px" }}>
        <div style={{ fontSize: "14px", fontWeight: "800", color: "#ff5a00", lineHeight: 1.3 }}>{voucher.discount}</div>
        <div style={{ fontSize: "11px", color: "#666", marginTop: "3px" }}>{voucher.minOrder}</div>
        <div style={{
          display: "inline-block", marginTop: "6px",
          border: "1px solid #ff9f43", color: "#ff7b00",
          padding: "2px 8px", borderRadius: "5px",
          fontSize: "10px", fontWeight: "700",
        }}>{voucher.tag}</div>

        {/* Usage bar OR expiry */}
        {voucher.usedPercent !== null ? (
          <div style={{ marginTop: "8px" }}>
            <div style={{
              height: "5px", borderRadius: "99px", background: "#eee", overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${voucher.usedPercent}%`,
                background: "linear-gradient(90deg, #ff4e00, #ec9f05)",
                borderRadius: "99px",
              }} />
            </div>
            <div style={{ fontSize: "10px", color: "#aaa", marginTop: "3px" }}>
              Đã dùng {voucher.usedPercent}% · hết hạn trong: ...
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "8px", fontSize: "11px", color: "#aaa" }}>
            hết hạn trong: <span style={{ color: "#555", fontWeight: "600" }}>{voucher.expiry}</span>
            {" "}<span style={{ color: "#1877f2", fontWeight: "600", cursor: "pointer" }}>Điều kiện</span>
          </div>
        )}
      </div>

      {/* "Dùng ngay" button */}
      {!selectable && (
        <div style={{ display: "flex", alignItems: "center", paddingRight: "12px" }}>
          <div style={{
            border: "1.5px solid #ee5a00", color: "#ee5a00",
            borderRadius: "8px", padding: "6px 8px",
            fontSize: "11px", fontWeight: "700", textAlign: "center",
            lineHeight: 1.3, whiteSpace: "nowrap",
          }}>Dùng<br />ngay</div>
        </div>
      )}

      {/* Radio (voucher tab only) */}
      {selectable && (
        <div style={{ display: "flex", alignItems: "center", paddingRight: "14px" }}>
          <div style={{
            width: "20px", height: "20px", borderRadius: "50%",
            border: `2.5px solid ${selected ? "#9d4edd" : "#ddd"}`,
            background: selected ? "#9d4edd" : "#fff",
            transition: "all 0.15s",
          }} />
        </div>
      )}
    </div>
  );
}
