// โหลดปลั๊กอินโทรศัพท์
console.log("กำลังโหลด: โทรศัพท์สมาร์ท...");

import { getContext } from "../../../extensions.js";
import { saveSettingsDebounced } from "../../../../script.js";

const ชื่อปลั๊กอิน = "mobile-phone";
const โฟลเดอร์ = `scripts/extensions/third-party/${ชื่อปลั๊กอิน}`;

let บริบท = null;

async function โหลด() {
  บริบท = getContext();
  const html = await fetch(`${โฟลเดอร์}/mobile-phone.html`).then(r => r.text());
  $("#extensions_settings").append(html);

  // เพิ่มปุ่มโทรศัพท์
  if (!$("#ปุ่ม_โทรศัพท์").length) {
    const ปุ่ม = $(`
      <div id="ปุ่ม_โทรศัพท์" class="fa-solid fa-mobile-screen-button interact_btn" title="เปิดโทรศัพท์"></div>
    `);
    $("#extensionsMenu").append(ปุ่ม);
    ปุ่ม.on("click", เปิดโทรศัพท์);
  }

  เริ่มลากย้าย();
  โหลดแอพทั้งหมด();
}

function เปิดโทรศัพท์() {
  $("#หน้าจอ_โทรศัพท์").toggle();
}

jQuery(async () => {
  await โหลด();
});
