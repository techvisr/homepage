export default function ResourceIllustration({ type }) {
  return (
    <svg viewBox="0 0 240 120" fill="none" aria-hidden="true" focusable="false" strokeLinecap="round" strokeLinejoin="round">
      {type === "ai" ? (
        <>
          <path d="M53 34H87M53 86H87M157 34H193M157 86H193" stroke="#c4bccb" strokeWidth="1.5" />
          <circle cx="47" cy="34" r="6" fill="#ede6ee" stroke="#b9acbd" />
          <circle cx="47" cy="86" r="6" fill="#f5e6df" stroke="#cfae9e" />
          <circle cx="199" cy="34" r="6" fill="#f5e6df" stroke="#cfae9e" />
          <circle cx="199" cy="86" r="6" fill="#ede6ee" stroke="#b9acbd" />
          <path d="M106 16V24M123 16V24M140 16V24M106 96V104M123 96V104M140 96V104" stroke="#b9acbd" strokeWidth="1.5" />
          <rect x="87" y="24" width="72" height="72" rx="16" fill="#fff" stroke="#b5acbf" strokeWidth="1.5" />
          <rect x="99" y="36" width="48" height="48" rx="10" fill="#eee9f3" />
          <path d="M123 46L127 56L137 60L127 64L123 74L119 64L109 60L119 56L123 46Z" fill="#d7bdc2" stroke="#b798a4" strokeWidth="1.3" />
        </>
      ) : type === "cloud" ? (
        <>
          <path d="M96 67V81H68V96M153 67V81H184V96M124 67V96" stroke="#bdb3c7" strokeWidth="1.5" />
          <path d="M93 66C81 66 75 59 75 50C75 41 81 35 90 34C93 20 107 14 119 20C124 14 134 14 142 19C148 22 152 29 152 36C164 34 176 41 176 51C176 60 168 66 158 66H93Z" fill="#fff" stroke="#b5acbf" strokeWidth="1.5" />
          <path d="M111 45L124 33L137 45M124 34V56" stroke="#bc998a" strokeWidth="2" />
          {[54, 110, 170].map((x) => <rect key={x} x={x} y="94" width="28" height="15" rx="5" fill="#ede7f2" stroke="#bdb3c7" />)}
          <circle cx="184" cy="27" r="4" fill="#eddbd2" />
        </>
      ) : (
        <>
          <rect x="83" y="14" width="121" height="76" rx="12" fill="#ece7f2" stroke="#c6bccf" strokeWidth="1.5" />
          <rect x="46" y="34" width="133" height="76" rx="12" fill="#fff" stroke="#b5acbf" strokeWidth="1.5" />
          <path d="M47 55H178" stroke="#ded8e5" />
          <circle cx="60" cy="45" r="2" fill="#ccab9d" /><circle cx="69" cy="45" r="2" fill="#c4b7ce" />
          <path d="M93 69L82 80L93 91M134 69L145 80L134 91M120 65L108 95" stroke="#b798a4" strokeWidth="2" />
          <rect x="189" y="96" width="16" height="16" rx="5" fill="#f0dfd7" stroke="#d2b2a3" />
        </>
      )}
    </svg>
  );
}
