import React from 'react'
import styled from '@emotion/styled'
import { NavLink, useNavigate } from 'react-router-dom'

import theme from '../themes/theme'
import Button from './reusable/Button'
import Wrapper from './reusable/Wrapper'

const Logo = ({ width, height, color }) => (
  <svg width={width} height={height} viewBox='0 0 178 43'>
    <path
      d='M178,41.9992158 L171.219313,41.9992158 L165.497884,33.6125238 L161.047884,33.6125238 L161.047884,41.9992158 L155.114286,41.9992158 L155.114286,16 L169.523545,16 C169.523545,16 177.288,16.3011492 177.288,24.7717552 C177.288,30.7719965 171.642857,32.9835611 171.642857,32.9835611 L178,41.9992158 Z M167.981143,20.7870178 L160.943786,20.7870178 L160.943786,28.3878985 L168.62083,28.3878985 C168.62083,28.3878985 171.555446,28.3871143 171.555446,24.5866739 C171.555446,20.6419329 167.981143,20.7870178 167.981143,20.7870178 Z M89.4235446,16 L109.342857,16 L109.342857,21.0285645 L95.3571429,21.0285645 L95.3571429,26.4837571 L107.435714,26.4837571 L107.435714,31.5162429 L95.3571429,31.5162429 L95.3571429,36.9675143 L109.342857,36.9675143 L109.342857,41.9992158 L89.4235446,41.9992158 L89.4235446,16 Z M74.3785714,41.9992158 L68.4449732,41.9992158 L68.4449732,21.0324857 L60.6050268,21.0324857 L60.6050268,16 L82.2193125,16 L82.2193125,21.0324857 L74.3785714,21.0324857 L74.3785714,41.9992158 Z M33.4806875,16 L53.4,16 L53.4,21.0285645 L39.4142857,21.0285645 L39.4142857,26.4837571 L51.4928571,26.4837571 L51.4928571,31.5162429 L39.4142857,31.5162429 L39.4142857,36.9675143 L53.4,36.9675143 L53.4,41.9992158 L33.4806875,41.9992158 L33.4806875,16 Z M20.3428571,25.6446174 L13.1338571,36.1283745 L5.929625,25.6446174 L5.929625,42 L0,42 L0,16 L5.929625,16 L13.1338571,26.6931499 L20.3428571,16 L26.2764554,16 L26.2764554,42 L20.3428571,42 L20.3428571,25.6446174 Z'
      id='Shape'
      fill={color}
    />
    <path
      d='M149.647815,28.4299087 C148.961675,29.165824 148.065034,28.5350394 148.065034,28.5350394 L128.017537,6.9935855 L149.806094,26.9588743 C149.806094,26.9588743 150.333955,27.6947897 149.647815,28.4299087 Z M147.406211,21.4498627 L138.32008,11.6567723 L148.267501,20.7107616 C148.267501,20.7107616 148.52862,21.0556223 148.188764,21.4004831 C147.849711,21.7445475 147.406211,21.4498627 147.406211,21.4498627 Z M148.891776,34.4422736 C147.909969,35.4959707 146.626872,34.5935982 146.626872,34.5935982 L117.931121,3.7600179 L149.118347,32.3372689 C149.118347,32.3372689 149.873583,33.3901695 148.891776,34.4422736 Z M145.947159,39.6319107 C144.965353,40.6848113 143.681452,39.7824389 143.681452,39.7824389 L106,0 L146.17373,37.5261095 C146.17373,37.5261095 146.928163,38.5790101 145.947159,39.6319107 Z M140.510264,42.4895562 C139.528458,43.5424568 138.244556,42.6400843 138.244556,42.6400843 L109.549609,11.806504 L140.736835,40.383755 C140.736835,40.383755 141.491267,41.4366556 140.510264,42.4895562 Z M133.941319,42.5684043 C133.255179,43.3035232 132.358537,42.673535 132.358537,42.673535 L112.311041,21.1320811 L134.099597,41.0973699 C134.099597,41.0973699 134.626655,41.8332853 133.941319,42.5684043 Z M127.196419,40.8026852 C126.857366,41.147546 126.413866,40.8520648 126.413866,40.8520648 L117.327735,31.0589743 L127.275156,40.1129636 C127.275156,40.1129636 127.535472,40.4578244 127.196419,40.8026852 Z'
      id='Shape'
      fill='#FF6A3E'
    />
  </svg>
)

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media all and (max-width: 1220px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const LogoLink = styled.div`
  margin-right: auto;
  margin-bottom: 0.5rem;
`

const StandardLink = styled.span`
  margin-right: 1.5rem;
  transition: 0.3s ease;

  &:hover {
    color: ${theme.orange};
  }
`

const SearchButton = styled.button`
  margin-top: 2px;
  margin-right: 15px;

  outline: none;
  border: none;
  background-color: ${theme.background};
  cursor: pointer;

  svg path {
    fill: ${theme.primary};
  }

  &:hover {
    svg path {
      fill: ${theme.orange};
    }
  }
`

// const SearchBar = styled.input`
//   width: 300px;
//   display: block;
//   margin-left: auto;
//   margin-top: -10px;
//   margin-right: 25px;
//   padding: 0.5rem;
//
//   font-family: 'Comfortaa', sans-serif;
//   outline: none;
//   border: none;
//   font-size: 1rem;
//   border-bottom: 1px solid ${theme.primary};
//
//   @media all and (max-width: 600px) {
//     width: calc(100% - 40px);
//     margin-left: 20px;
//     margin-right: 20px;
//   }
// `

const Header = () => {
  // const [search, isSearch] = useState(false)

  const navigate = useNavigate()

  return (
    <Wrapper>
      <Navbar>
        <LogoLink>
          <NavLink to='/'>
            <Logo width='143px' height='35px' color={theme.primary} />
          </NavLink>
        </LogoLink>

        <SearchButton onClick={() => navigate('/search')}>
          <svg width='16px' height='16px' viewBox='0 0 612.08 612.08'>
            <path
              d='M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
		c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
		c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
		 M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
		S338.402,419.811,237.927,419.811z'
            />
          </svg>
        </SearchButton>

        {localStorage.getItem('auth') ? (
          <>
            <NavLink to='/questions'>
              <StandardLink>Questions</StandardLink>
            </NavLink>
            <Button
              onClick={() => {
                localStorage.removeItem('auth')
                navigate('/')
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <NavLink to='/signin'>
            <Button>Sign In</Button>
          </NavLink>
        )}
      </Navbar>
      {/*{search && <SearchBar placeholder='Search...' />}*/}
    </Wrapper>
  )
}

export default Header
