import React from "react"
import { colors } from "gatsby-design-tokens"

const LayerIcon = ({ name, fillColor = colors.grey[`50`] }) => {
  const icons = {
    Content: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="presentation"
      >
        <circle
          cx="16.703"
          cy="16.7768"
          r="6.36368"
          transform="rotate(45 16.703 16.7768)"
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <circle
          cx="16.7034"
          cy="2.52182"
          r="1.01819"
          transform="rotate(90 16.7034 2.52182)"
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <circle
          cx="2.44852"
          cy="16.7765"
          r="1.01819"
          transform="rotate(90 2.44852 16.7765)"
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <circle
          cx="6.62354"
          cy="6.69713"
          r="1.01819"
          transform="rotate(45 6.62354 6.69713)"
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <circle
          cx="6.62354"
          cy="26.8563"
          r="1.01819"
          transform="rotate(45 6.62354 26.8563)"
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M16.7031 2.52197C24.5758 2.52197 30.9578 8.90399 30.9578 16.7766C30.9578 24.6492 24.5758 31.0313 16.7031 31.0313C12.9071 31.0313 9.45762 29.5474 6.90308 27.1282"
          stroke={fillColor}
          strokeWidth="1.52728"
        />
      </svg>
    ),
    Build: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="presentation"
      >
        <path
          d="M30.2955 12.3557C27.4818 16.5214 24.2529 20.3909 20.6584 23.905C12.243 32.3204 3.8995 37.6216 2.02247 35.7399C0.686096 34.4036 3.04575 29.7377 7.52069 24.157"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5393 11.0486C22.1007 9.75895 23.7323 8.55666 25.4266 7.44727"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1203 11.2441C10.4419 6.66224 5.66914 4.21859 4.31749 5.56565C-0.607995 10.4911 29.4428 39.647 33.3405 35.7402C34.4981 34.581 32.922 30.9567 29.5635 26.3718"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0278 13.1609C14.1006 11.6304 16.629 10.8434 19.2043 10.9272C21.7796 11.011 24.2514 11.9606 26.2204 13.6226C28.1894 15.2847 29.5405 17.562 30.0554 20.0867C30.5703 22.6114 30.219 25.236 29.0581 27.5364C27.8972 29.8367 25.9947 31.6785 23.6579 32.7641C21.3211 33.8497 18.6865 34.1157 16.1798 33.5192C13.6732 32.9226 11.4408 31.4983 9.84357 29.4765C8.2463 27.4546 7.37737 24.9532 7.3772 22.3766C7.37737 21.9105 7.40542 21.4449 7.4612 20.9821"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.5543 8.65346C34.4648 8.65346 36.0136 7.10468 36.0136 5.19416C36.0136 3.28364 34.4648 1.73486 32.5543 1.73486C30.6438 1.73486 29.095 3.28364 29.095 5.19416C29.095 7.10468 30.6438 8.65346 32.5543 8.65346Z"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Data: (
      <svg
        width="33"
        height="38"
        viewBox="0 0 33 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="presentation"
      >
        <path
          d="M3.05107 27.5606L3.0281 27.5474L17.2549 2.90647L17.2779 2.91974L3.05107 27.5606Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M2.43967 26.5163H30.8934V26.5428H2.43967V26.5163Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M16.9859 34.2408L3.31242 26.3462L3.32568 26.3232L16.9991 34.2178L16.9859 34.2408Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M30.0135 11.6751L16.34 3.78051L16.3533 3.75754L30.0267 11.6522L30.0135 11.6751Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M3.32954 11.6693L3.31628 11.6463L16.9898 3.75169L17.003 3.77465L3.32954 11.6693Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M30.2961 27.5611L16.0693 2.92022L16.0922 2.90696L30.3191 27.5479L30.2961 27.5611Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M3.62863 11.1001H3.65515V26.8893H3.62863V11.1001Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M29.6875 11.1001H29.714V26.8893H29.6875V11.1001Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <mask id="path-9-inside-1" fill="white">
          <path d="M16.3224 33.4504L17.001 34.6257L30.0435 27.0954L29.3649 25.92L16.3224 33.4504Z" />
        </mask>
        <path
          d="M16.3224 33.4504L17.001 34.6257L30.0435 27.0954L29.3649 25.92L16.3224 33.4504Z"
          fill={fillColor}
        />
        <path
          d="M17.001 34.6257L15.6783 35.3894L16.442 36.712L17.7646 35.9484L17.001 34.6257ZM16.3224 33.4504L15.5587 32.1277L14.2361 32.8914L14.9997 34.214L16.3224 33.4504ZM29.3649 25.92L30.6875 25.1564L29.9239 23.8338L28.6013 24.5974L29.3649 25.92ZM30.0435 27.0954L30.8072 28.418L32.1298 27.6544L31.3662 26.3317L30.0435 27.0954ZM18.3236 33.8621L17.645 32.6867L14.9997 34.214L15.6783 35.3894L18.3236 33.8621ZM17.086 34.773L30.1286 27.2426L28.6013 24.5974L15.5587 32.1277L17.086 34.773ZM28.0423 26.6837L28.7209 27.859L31.3662 26.3317L30.6875 25.1564L28.0423 26.6837ZM29.2799 25.7728L16.2373 33.3031L17.7646 35.9484L30.8072 28.418L29.2799 25.7728Z"
          fill={fillColor}
          mask="url(#path-9-inside-1)"
        />
        <path
          d="M31.8763 27.7743L31.8746 27.7773C31.1877 28.9722 29.6525 29.3838 28.4524 28.694C27.2575 28.007 26.8458 26.4719 27.5357 25.2717C28.2225 24.077 29.7573 23.6653 30.9574 24.3547C32.1653 25.0527 32.5709 26.5786 31.8763 27.7743Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M5.79747 12.717C5.11056 13.9119 3.57537 14.3235 2.37524 13.6336C1.18031 12.9467 0.7687 11.4116 1.4586 10.2114C2.14521 9.01699 3.67941 8.60523 4.87932 9.29391C6.07847 9.99148 6.48588 11.5195 5.79747 12.717Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M1.46787 27.7773C0.779468 26.5798 1.18687 25.0518 2.38599 24.3542C3.58331 23.667 5.1103 24.0746 5.80759 25.2732C6.49466 26.4702 6.08744 27.9968 4.88945 28.6943C3.67905 29.3843 2.15406 28.971 1.46787 27.7773Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M27.5453 12.717C26.8569 11.5195 27.2643 9.9915 28.4634 9.29393C29.6607 8.60669 31.1877 9.01428 31.885 10.213C32.5722 11.4103 32.1646 12.9372 30.966 13.6345C29.7661 14.3232 28.2319 13.9114 27.5453 12.717Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M16.6713 36.5584C15.2865 36.5584 14.1682 35.4401 14.1682 34.0553C14.1682 32.6705 15.2865 31.5522 16.6713 31.5522C18.0561 31.5522 19.1744 32.6705 19.1744 34.0553C19.1744 35.4322 18.0546 36.5584 16.6713 36.5584Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
        <path
          d="M16.6713 6.43682C15.2865 6.43682 14.1682 5.31851 14.1682 3.93373C14.1682 2.54894 15.2865 1.43063 16.6713 1.43063C18.0561 1.43063 19.1744 2.54894 19.1744 3.93373C19.1744 5.31851 18.0561 6.43682 16.6713 6.43682Z"
          fill={fillColor}
          stroke={fillColor}
          strokeWidth="1.52728"
        />
      </svg>
    ),
    View: (
      <svg
        width="38"
        height="34"
        viewBox="0 0 38 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="presentation"
      >
        <path
          d="M21.4592 16.875C21.4592 18.3022 20.3022 19.4592 18.875 19.4592C17.4478 19.4592 16.2908 18.3022 16.2908 16.875C16.2908 15.4478 17.4478 14.2908 18.875 14.2908C20.3022 14.2908 21.4592 15.4478 21.4592 16.875Z"
          fill="white"
          stroke={fillColor}
          strokeWidth="1.5817"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 17H1.71953C1.71953 18.2221 3.49328 19.7633 6.23522 20.9386C6.90909 21.2266 7.63718 21.4913 8.404 21.7326C8.83775 20.2147 9.41093 18.6346 10.1235 17.0156C10.1212 17.0104 10.1189 17.0052 10.1166 17H12.0397C12.0361 17.0078 12.0325 17.0156 12.0289 17.0234C12.5169 18.0664 13.0514 19.1016 13.64 20.1213C14.2442 21.1644 14.8716 22.1529 15.5145 23.0792C16.6608 23.1726 17.8304 23.2271 19 23.2271C20.1773 23.2271 21.3469 23.1726 22.501 23.0714C23.1439 22.1451 23.7636 21.1488 24.3677 20.098C24.9472 19.0808 25.4804 18.0404 25.9674 17H27.8756C28.5928 18.6214 29.1714 20.204 29.6115 21.7248C30.3628 21.4835 31.0909 21.2266 31.757 20.9386C34.499 19.7711 36.2727 18.2221 36.2805 17H38C38 19.522 34.863 21.9194 30.0607 23.4061C31.1839 28.3411 30.6959 32.272 28.5194 33.533C28.0082 33.8288 27.4195 33.9689 26.7689 33.9689C24.6388 33.9689 21.8504 32.4588 19.031 29.8278C16.2116 32.4744 13.4232 34 11.2931 34C10.6425 34 10.0538 33.8599 9.55035 33.5641C7.36608 32.3031 6.87036 28.3645 7.98573 23.4139C3.15247 21.9272 1.58456e-06 19.5298 0 17ZM27.9384 22.1841C27.6441 21.1722 27.2878 20.1291 26.8695 19.0861C26.552 19.7088 26.2189 20.3393 25.8626 20.962C25.5063 21.5925 25.1268 22.2074 24.7472 22.8068C25.8549 22.6433 26.9238 22.4331 27.9384 22.1841ZM16.8622 24.9006C17.5748 25.8114 18.2952 26.6442 19.0155 27.3915C19.7281 26.6442 20.4484 25.8114 21.1455 24.9006C20.4407 24.9396 19.7203 24.9551 18.9923 24.9551C18.2719 24.9551 17.5593 24.9318 16.8622 24.9006ZM10.077 22.1919C11.0917 22.4409 12.1529 22.6433 13.2528 22.8068C12.8732 22.2152 12.5014 21.6081 12.1374 20.9853C11.7733 20.3626 11.4403 19.7399 11.1227 19.1172C10.7199 20.1525 10.3636 21.1877 10.077 22.1919ZM9.24827 26.1694C8.89197 29.1429 9.34896 31.4547 10.4024 32.0618C10.6347 32.1941 10.9291 32.2642 11.2776 32.272C12.8887 32.272 15.2589 30.9798 17.7839 28.6213C16.6918 27.4771 15.6074 26.1694 14.5618 24.7294C12.819 24.5426 11.1614 24.2546 9.6433 23.881C9.47289 24.6671 9.33347 25.4377 9.24827 26.1694ZM27.6441 32.0307C28.6898 31.4158 29.139 29.1039 28.775 26.1305C28.6898 25.4066 28.5503 24.6516 28.3722 23.8654C26.8541 24.2468 25.1965 24.5348 23.446 24.7216C22.4158 26.1616 21.3314 27.4615 20.247 28.6058C22.7721 30.9487 25.15 32.2331 26.7534 32.2331C27.1097 32.2331 27.4117 32.1708 27.6441 32.0307Z"
          fill={fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38 17L36.2805 17C36.2805 15.7779 34.5067 14.2367 31.7648 13.0614C31.0909 12.7734 30.3628 12.5087 29.596 12.2674C29.1622 13.7853 28.5891 15.3654 27.8765 16.9844C27.8788 16.9896 27.8811 16.9948 27.8834 17L25.9603 17C25.9639 16.9922 25.9675 16.9844 25.9711 16.9766C25.4831 15.9336 24.9486 14.8983 24.36 13.8787C23.7558 12.8356 23.1284 11.8471 22.4855 10.9208C21.3392 10.8274 20.1696 10.7729 19 10.7729C17.8227 10.7729 16.6531 10.8274 15.499 10.9286C14.8561 11.8549 14.2364 12.8512 13.6323 13.902C13.0528 14.9192 12.5196 15.9596 12.0326 17L10.1244 17C9.40722 15.3786 8.82859 13.796 8.3885 12.2752C7.63718 12.5165 6.90909 12.7733 6.24297 13.0614C3.50102 14.2289 1.72727 15.7779 1.71952 17L0 17C2.20479e-07 14.478 3.13697 12.0806 7.93926 10.5939C6.81614 5.65888 7.30411 1.72802 9.48063 0.467031C9.99185 0.171245 10.5805 0.0311332 11.2311 0.0311332C13.3612 0.0311334 16.1496 1.54121 18.969 4.17216C21.7884 1.52564 24.5768 -3.08084e-06 26.7069 -2.89462e-06C27.3575 -2.83774e-06 27.9462 0.140109 28.4497 0.435895C30.6339 1.69689 31.1296 5.63553 30.0143 10.5861C34.8475 12.0728 38 14.4702 38 17ZM10.0616 11.8159C10.3559 12.8278 10.7122 13.8709 11.1305 14.9139C11.448 14.2912 11.7811 13.6607 12.1374 13.038C12.4937 12.4075 12.8732 11.7926 13.2528 11.1932C12.1451 11.3567 11.0762 11.5668 10.0616 11.8159ZM21.1378 9.09936C20.4252 8.18864 19.7049 7.35577 18.9845 6.60852C18.2719 7.35577 17.5516 8.18864 16.8545 9.09936C17.5593 9.06044 18.2797 9.04487 19.0077 9.04487C19.7281 9.04487 20.4407 9.06822 21.1378 9.09936ZM27.923 11.8081C26.9083 11.5591 25.8471 11.3567 24.7472 11.1932C25.1268 11.7848 25.4986 12.3919 25.8626 13.0147C26.2267 13.6374 26.5597 14.2601 26.8773 14.8828C27.2801 13.8475 27.6364 12.8123 27.923 11.8081ZM28.7517 7.83059C29.108 4.85714 28.651 2.54533 27.5976 1.93819C27.3653 1.80586 27.0709 1.7358 26.7224 1.72802C25.1113 1.72802 22.7411 3.02015 20.2161 5.37866C21.3082 6.5229 22.3926 7.83059 23.4382 9.2706C25.181 9.45742 26.8386 9.74542 28.3567 10.119C28.5271 9.33288 28.6665 8.56227 28.7517 7.83059ZM10.3559 1.96932C9.31024 2.58425 8.86099 4.89606 9.22503 7.86951C9.31023 8.59341 9.44965 9.34844 9.6278 10.1346C11.1459 9.7532 12.8035 9.4652 14.554 9.27839C15.5842 7.83837 16.6686 6.53846 17.753 5.39423C15.2279 3.05128 12.85 1.76694 11.2466 1.76694C10.8903 1.76694 10.5883 1.82921 10.3559 1.96932Z"
          fill={fillColor}
        />
      </svg>
    ),
    App: (
      <svg
        width="37"
        height="32"
        viewBox="0 0 37 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="presentation"
      >
        <path
          d="M33.7089 1.10376H3.92691C2.66167 1.10376 1.63599 2.12944 1.63599 3.39469V28.5949C1.63599 29.8601 2.66167 30.8858 3.92691 30.8858H33.7089C34.9742 30.8858 35.9999 29.8601 35.9999 28.5949V3.39469C35.9999 2.12944 34.9742 1.10376 33.7089 1.10376Z"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.63574 7.97607H35.9996"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7996 1.10327V7.97605"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.6721 1.10327V7.97605"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8175 26.3037C20.7154 26.3037 22.2539 24.7652 22.2539 22.8673C22.2539 20.9694 20.7154 19.4309 18.8175 19.4309C16.9196 19.4309 15.3811 20.9694 15.3811 22.8673C15.3811 24.7652 16.9196 26.3037 18.8175 26.3037Z"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.36279 24.0125H9.65372"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.717 15.9119L12.5895 17.7843"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8176 12.5581V14.849"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.6904 15.9944L21.2476 20.4373"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.2724 24.0125H27.9814"
          stroke={fillColor}
          strokeWidth="1.52728"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  }
  return icons[name]
}

export default LayerIcon
