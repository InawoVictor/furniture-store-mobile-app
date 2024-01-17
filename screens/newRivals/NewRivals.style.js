import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
        width: SIZES.width -50,
        backgroundColor: COLORS.primary,
        marginHorizontal: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "absolute",
        borderRadius: SIZES.large,
        top: SIZES.small,
        zIndex: 999,
    },
    heading: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginLeft: 5,
    },
})

export default styles;