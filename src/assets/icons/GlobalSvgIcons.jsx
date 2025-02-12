import React from 'react'

const GlobalSvgIcons = ({ id }) => {
  switch (id) {
    case 'search':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.14 19.905L30.735 28.5L28.5 30.735L19.905 22.14C18.3 23.295 16.365 24 14.25 24C8.865 24 4.5 19.635 4.5 14.25C4.5 8.865 8.865 4.5 14.25 4.5C19.635 4.5 24 8.865 24 14.25C24 16.365 23.295 18.3 22.14 19.905ZM14.25 7.5C10.515 7.5 7.5 10.515 7.5 14.25C7.5 17.985 10.515 21 14.25 21C17.985 21 21 17.985 21 14.25C21 10.515 17.985 7.5 14.25 7.5Z" fill="#49454F" />
        </svg>
      )
    case 'list':
      return (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9H3C3.55 9 4 8.55 4 8V6C4 5.45 3.55 5 3 5H1C0.45 5 0 5.45 0 6V8C0 8.55 0.45 9 1 9ZM1 14H3C3.55 14 4 13.55 4 13V11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11V13C0 13.55 0.45 14 1 14ZM1 4H3C3.55 4 4 3.55 4 3V1C4 0.45 3.55 0 3 0H1C0.45 0 0 0.45 0 1V3C0 3.55 0.45 4 1 4ZM6 9H17C17.55 9 18 8.55 18 8V6C18 5.45 17.55 5 17 5H6C5.45 5 5 5.45 5 6V8C5 8.55 5.45 9 6 9ZM6 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10H6C5.45 10 5 10.45 5 11V13C5 13.55 5.45 14 6 14ZM5 1V3C5 3.55 5.45 4 6 4H17C17.55 4 18 3.55 18 3V1C18 0.45 17.55 0 17 0H6C5.45 0 5 0.45 5 1Z" fill="#6750A4" />
        </svg>
      )
    case 'edit':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z" fill="#6750A4" />
        </svg>
      )
    case 'trash':
      return (
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#CF1B1B" />
        </svg>
      )
    case 'grid':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 18H3C2.45 18 2 17.55 2 17V14H6V18ZM6 12H2V8H6V12ZM6 6H2V3C2 2.45 2.45 2 3 2H6V6ZM12 18H8V14H12V18ZM12 12H8V8H12V12ZM12 6H8V2H12V6ZM17 18H14V14H18V17C18 17.55 17.55 18 17 18ZM18 12H14V8H18V12ZM18 6H14V2H17C17.55 2 18 2.45 18 3V6Z" fill="#6750A4" />
        </svg>
      )
    case 'back':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 16.5H11.745L20.13 8.115L18 6L6 18L18 30L20.115 27.885L11.745 19.5H30V16.5Z" fill="#1C1B1F" />
        </svg>
      )
    case 'close':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C9.705 3 3 9.705 3 18C3 26.295 9.705 33 18 33C26.295 33 33 26.295 33 18C33 9.705 26.295 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30ZM18 15.885L23.385 10.5L25.5 12.615L20.115 18L25.5 23.385L23.385 25.5L18 20.115L12.615 25.5L10.5 23.385L15.885 18L10.5 12.615L12.615 10.5L18 15.885Z" fill="#49454F" />
        </svg>
      )
  }
}

export default GlobalSvgIcons