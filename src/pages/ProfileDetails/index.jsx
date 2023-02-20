import Layout from "../../components/LayOut/index";
import NavButton from "../../components/NavButton/index";
import { Styledbtn, Styledline } from "../Report/style";
import ProfileDetailsForm from "../../components/ProfileDetailsform";


const index = () => {
    return (
        <Layout title="Profile details">
            <Styledbtn>
                <NavButton name="View details" />
            </Styledbtn>
            <Styledline></Styledline>
            <ProfileDetailsForm />
        </Layout>
    )
}

export default index;

