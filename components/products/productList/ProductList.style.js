import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    container: {
        alignItems: "flex-start",
        paddingTop: 60,
        // paddingHorizontal: SIZES.xSmall/2,
    },
    separator: {
        height: 4,
    }
})

export default styles;