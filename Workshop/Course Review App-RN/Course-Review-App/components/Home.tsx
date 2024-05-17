import { createStackNavigator } from "@react-navigation/stack";
import CoursesList from "./CoursesList";
import CourseDetails from "./CourseDetails";
import AddReview from "./AddReview";
import Addcourse from "./addcourse";

const { Navigator, Screen } = createStackNavigator();
export default function Home() {

    return (
        <Navigator>
            <Screen name="course-list" component={CoursesList} options={{ headerShown: false }} />
            <Screen name="course-details" component={CourseDetails} options={{ title: 'Course Details' }} />
            <Screen name='add-review' component={AddReview} options={{ title: "Add Review" }} />
            <Screen name='add-course' component={Addcourse} options={{ title: "Add New Course" }} />
        </Navigator>
    );
}