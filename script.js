const terminal = document.getElementById("terminal");

const lines = [
    "Sistem başlatılıyor...",
    "Güvenlik duvarı devre dışı bırakıldı.",
    "IP adresi bulunuyor...",
    "IP adresi: 192.168.1.42",
    "Sunucuya bağlanılıyor...",
    "Veri tabanı hackleniyor...",
    "Şifreler alınıyor...",
    "Sistem çöküyor...",
    "Tüm dosyalar siliniyor...",
    "",
    "💀💀💀 PANİK YAPMA 💀💀💀",

];

let i = 0;

function showNextLine() {
    if (i < lines.length) {
        terminal.innerHTML += lines[i] + "\n";
        i++;
        setTimeout(showNextLine, 700); // her satır 0.7 saniyede yazılır
    }
}

showNextLine();