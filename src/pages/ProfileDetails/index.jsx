import Layout from "../../components/LayOut/index";
import NavButton from "../../components/NavButton/index";
import { Styledbtn, Styledline } from "../Report/style";
import Detailsform from "../../components/Detailsform/index";
import { StyledLink } from "../Login/style";


const index = () => {
    return (
        <Layout title="Profile details">
            <StyledLink to="/companyDetails">
               <Styledbtn>
                <NavButton name="View details" />
            </Styledbtn>
            </StyledLink>
            <Styledline></Styledline>
            <Detailsform profile/>
        </Layout>
    )
}

export default index;

