import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: column; 
    overflow-x: auto; 
    justify-content: start;
    gap: 16px;
    padding: 20px;
     -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
`;


interface ThemeCardsGridProps {
    children: ReactNode;
}

export default function ThemeCardsGrid({ children }: ThemeCardsGridProps) {

    const QUESTION_SVG = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='w-6 h-6 pt-8px  text-black'>
        <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z' clipRule='evenodd' />
    </svg>)

    return (
        <StyledGrid>
            <Link to='create-card/random' className='w-[167px] h-[270px] rounded-lg bg-gradient-to-bl from-secondary to-primary'>

                {QUESTION_SVG}
                <h4 className='text-center font-semibold text-white'>나만의 굳이데이<br />카드 생성하기</h4>
                <div className='text-center text-[14px] text-white py-4px'>모든 옵션 설정 가능</div>
            </Link>
            {children}


        </StyledGrid>
    )
}
