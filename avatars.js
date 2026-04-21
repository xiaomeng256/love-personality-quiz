// SVG角色头像 - 每种人格一个简约卡通形象
const avatars = {
  rush: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE0E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M50 60 Q60 70 70 60" stroke="#E84393" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M55 25 L60 15 L65 25" fill="#FF6B6B" stroke="none"/>
    <path d="M45 28 L42 18 L52 26" fill="#FF6B6B" stroke="none"/>
    <path d="M68 26 L78 18 L75 28" fill="#FF6B6B" stroke="none"/>
    <text x="60" y="95" text-anchor="middle" font-size="22">❤️‍🔥</text>
  </svg>`,
  roommate: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#DFE6FE"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M50 60 L70 60" stroke="#636e72" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="30" y="75" width="25" height="18" rx="3" fill="#74b9ff" opacity="0.6"/>
    <rect x="65" y="75" width="25" height="18" rx="3" fill="#a29bfe" opacity="0.6"/>
    <path d="M35 30 Q60 20 85 30" stroke="#b2bec3" fill="none" stroke-width="6" stroke-linecap="round"/>
  </svg>`,
  sober: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E8E0FE"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M52 59 L68 59" stroke="#6c5ce7" fill="none" stroke-width="2" stroke-linecap="round"/>
    <rect x="44" y="42" width="14" height="10" rx="2" fill="none" stroke="#6c5ce7" stroke-width="1.5"/>
    <rect x="62" y="42" width="14" height="10" rx="2" fill="none" stroke="#6c5ce7" stroke-width="1.5"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="6" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">🧊</text>
  </svg>`,
  slowcook: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFF3E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="48" r="3.5" fill="#333"/>
    <circle cx="70" cy="48" r="3.5" fill="#333"/>
    <path d="M52 60 Q60 65 68 60" stroke="#e17055" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 30 Q60 22 85 30" stroke="#fdcb6e" fill="none" stroke-width="6" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="20">🍲</text>
  </svg>`,
  hunter: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE0F0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="48" cy="46" r="4" fill="#333"/>
    <circle cx="68" cy="46" r="4" fill="#333"/>
    <path d="M44 46 L52 44" stroke="#333" fill="none" stroke-width="1.5"/>
    <path d="M64 44 L72 46" stroke="#333" fill="none" stroke-width="1.5"/>
    <path d="M50 60 Q60 68 70 60" stroke="#e84393" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 30 Q60 15 90 30" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="18">🎯</text>
  </svg>`,
  alarm: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE0E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <ellipse cx="48" cy="48" rx="5" ry="6" fill="#FFF"/>
    <circle cx="49" cy="48" r="3" fill="#333"/>
    <ellipse cx="72" cy="48" rx="5" ry="6" fill="#FFF"/>
    <circle cx="71" cy="48" r="3" fill="#333"/>
    <path d="M52 62 Q60 58 68 62" stroke="#d63031" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 30 Q60 20 85 30" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="18">🚨</text>
  </svg>`,
  buddha: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E0FFF0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <path d="M45 48 L55 48" stroke="#333" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M65 48 L75 48" stroke="#333" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M52 60 Q60 65 68 60" stroke="#00b894" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="18">🧘</text>
  </svg>`,
  money: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFF8E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M50 60 Q60 67 70 60" stroke="#fdcb6e" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <rect x="42" y="42" width="8" height="8" rx="1" fill="#fdcb6e" opacity="0.5"/>
    <rect x="70" y="42" width="8" height="8" rx="1" fill="#fdcb6e" opacity="0.5"/>
    <text x="60" y="100" text-anchor="middle" font-size="18">💰</text>
  </svg>`,
  tsundere: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE8E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M44 46 L48 44" stroke="#333" fill="none" stroke-width="2"/>
    <path d="M72 44 L76 46" stroke="#333" fill="none" stroke-width="2"/>
    <path d="M52 61 L68 59" stroke="#e17055" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="42" cy="55" rx="6" ry="4" fill="#fab1a0" opacity="0.7"/>
    <ellipse cx="78" cy="55" rx="6" ry="4" fill="#fab1a0" opacity="0.7"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
  </svg>`,
  daydream: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#F0E8FF"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="48" cy="47" r="4" fill="#333"/>
    <circle cx="68" cy="47" r="4" fill="#333"/>
    <circle cx="50" cy="46" r="1.5" fill="#FFF"/>
    <circle cx="70" cy="46" r="1.5" fill="#FFF"/>
    <path d="M52 60 Q60 66 68 60" stroke="#b2bec3" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#dfe6e9" fill="none" stroke-width="5" stroke-linecap="round"/>
    <circle cx="85" cy="25" r="4" fill="#dfe6e9" opacity="0.6"/>
    <circle cx="92" cy="18" r="6" fill="#dfe6e9" opacity="0.4"/>
    <circle cx="100" cy="10" r="8" fill="#dfe6e9" opacity="0.3"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">🌸</text>
  </svg>`,
  drama: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE0F8"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="48" cy="46" r="5" fill="#333"/>
    <circle cx="72" cy="46" r="5" fill="#333"/>
    <circle cx="49" cy="45" r="2" fill="#FFF"/>
    <circle cx="73" cy="45" r="2" fill="#FFF"/>
    <path d="M48 60 Q60 72 72 60" stroke="#f368e0" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 28 Q60 12 90 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="25" y="90" font-size="14">✨</text>
    <text x="85" y="85" font-size="14">✨</text>
  </svg>`,
  silent: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E8E8E8"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M50 62 L70 62" stroke="#636e72" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#636e72" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">🤐</text>
  </svg>`,
  vanish: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E0FFFE"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2" opacity="0.7"/>
    <circle cx="50" cy="47" r="4" fill="#333" opacity="0.5"/>
    <circle cx="70" cy="47" r="4" fill="#333" opacity="0.5"/>
    <path d="M52 60 Q60 64 68 60" stroke="#00cec9" fill="none" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M35 28 Q60 18 85 28" stroke="#636e72" fill="none" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">👻</text>
  </svg>`,
  pleaser: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFF8E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M48 44 Q50 42 52 44" stroke="#333" fill="none" stroke-width="1.5"/>
    <path d="M68 44 Q70 42 72 44" stroke="#333" fill="none" stroke-width="1.5"/>
    <path d="M50 60 Q60 68 70 60" stroke="#f9ca24" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">📝</text>
  </svg>`,
  detective: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#EEE"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="48" cy="47" r="4" fill="#333"/>
    <circle cx="72" cy="47" r="4" fill="#333"/>
    <path d="M44 44 L52 42" stroke="#333" fill="none" stroke-width="2"/>
    <path d="M68 42 L76 44" stroke="#333" fill="none" stroke-width="2"/>
    <path d="M52 60 L68 60" stroke="#636e72" fill="none" stroke-width="2" stroke-linecap="round"/>
    <circle cx="82" cy="70" r="10" fill="none" stroke="#636e72" stroke-width="2.5"/>
    <line x1="89" y1="77" x2="98" y2="86" stroke="#636e72" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
  </svg>`,
  purist: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E0F8FF"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <circle cx="51" cy="46" r="1.5" fill="#FFF"/>
    <circle cx="71" cy="46" r="1.5" fill="#FFF"/>
    <path d="M52 60 Q60 65 68 60" stroke="#22a6b3" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="30" y="35" font-size="12">✨</text>
    <text x="82" y="30" font-size="12">✨</text>
    <text x="60" y="100" text-anchor="middle" font-size="16">✨</text>
  </svg>`,
  gym: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E0FFF0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <rect x="44" y="42" width="14" height="10" rx="2" fill="none" stroke="#00b894" stroke-width="1.5"/>
    <rect x="62" y="42" width="14" height="10" rx="2" fill="none" stroke="#00b894" stroke-width="1.5"/>
    <path d="M52 60 Q60 65 68 60" stroke="#00b894" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">📚</text>
  </svg>`,
  cliff: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE0F0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M50 62 L60 58 L70 62" stroke="#e84393" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">🪂</text>
  </svg>`,
  loop: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E8E0FE"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M50 60 Q60 66 70 60" stroke="#6c5ce7" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <path d="M80 80 A12 12 0 1 1 80 56" fill="none" stroke="#a29bfe" stroke-width="2"/>
    <polygon points="80,54 84,60 76,60" fill="#a29bfe"/>
  </svg>`,
  flirt: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE0F8"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <path d="M46 48 Q50 44 54 48" stroke="#333" fill="none" stroke-width="2" stroke-linecap="round"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <circle cx="71" cy="46" r="1.5" fill="#FFF"/>
    <path d="M50 60 Q60 66 70 60" stroke="#f368e0" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M30 28 Q60 14 90 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="16">🦋</text>
  </svg>`,
  show: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFE8E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="48" cy="46" r="5" fill="#333"/>
    <circle cx="72" cy="46" r="5" fill="#333"/>
    <circle cx="49" cy="45" r="2" fill="#FFF"/>
    <circle cx="73" cy="45" r="2" fill="#FFF"/>
    <path d="M48 60 Q60 72 72 60" stroke="#e17055" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 28 Q60 14 90 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <rect x="75" y="75" width="20" height="14" rx="2" fill="#fab1a0"/>
    <circle cx="85" cy="80" r="3" fill="#FFF" opacity="0.6"/>
  </svg>`,
  parent: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#FFF8E0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M48 60 Q60 70 72 60" stroke="#fdcb6e" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="100" text-anchor="middle" font-size="18">🧸</text>
  </svg>`,
  newbie: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#E0FFFE"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <ellipse cx="48" cy="47" rx="5" ry="6" fill="#FFF"/>
    <circle cx="49" cy="48" r="3.5" fill="#333"/>
    <ellipse cx="72" cy="47" rx="5" ry="6" fill="#FFF"/>
    <circle cx="71" cy="48" r="3.5" fill="#333"/>
    <ellipse cx="60" cy="63" rx="5" ry="4" fill="none" stroke="#00cec9" stroke-width="2"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="42" cy="55" rx="5" ry="3" fill="#fab1a0" opacity="0.5"/>
    <ellipse cx="78" cy="55" rx="5" ry="3" fill="#fab1a0" opacity="0.5"/>
  </svg>`,
  ideal: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#F0F0F0"/>
    <circle cx="60" cy="52" r="28" fill="#FFD5C2"/>
    <circle cx="50" cy="47" r="4" fill="#333"/>
    <circle cx="70" cy="47" r="4" fill="#333"/>
    <path d="M52 59 Q60 63 68 59" stroke="#b2bec3" fill="none" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 28 Q60 18 85 28" stroke="#2d3436" fill="none" stroke-width="5" stroke-linecap="round"/>
    <text x="60" y="18" text-anchor="middle" font-size="16">👑</text>
  </svg>`
};
