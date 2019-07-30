const colors =
{
    primary: '#FF4848',
    secondary: '#3E3E3E',

    nav: 'rgba(255,255,255,0.19)',
    subtitle: 'rgba(255,255,255,0.8)',

    gray: '#707070',
    gray2: '#C5C5C5',
    gray3: 'rgb(62, 62, 62)',
    white: '#FFFFFF',

    background: 'rgb(249, 249, 249)',
}

const sizes =
{
    h1: 30,
    h2: 26,
    h3: 18,
    h4: 12,

    nav: 15,
    subtitle: 11,

    border: 40,

    margin: 15,

    full: '100%'
}

const fonts =
{
    h1:
    {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: sizes.h1,
    },

    h2:
    {
        fontFamily: 'SF-Pro-Display',
        fontSize: sizes.h2,
        color: colors.white
    },

    h3:
    {
        fontFamily: 'Roboto-Bold',
        fontSize: sizes.h3,
        color: colors.white
    },

    h4:
    {
        fontFamily: 'Roboto-Bold',
        fontSize: sizes.h4,
    },

    nav:
    {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: sizes.nav,
        color: colors.nav 
    },

    subtitle:
    {
        fontFamily: 'Roboto-Medium',
        fontSize: sizes.subtitle,
        color: colors.subtitle
    }
}


export { colors, sizes, fonts }