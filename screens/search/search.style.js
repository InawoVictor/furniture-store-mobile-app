import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles  = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginHorizontal: SIZES.small,
        marginVertical: SIZES.medium,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray, 
        marginTop: SIZES.small,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    searchImage: {
        resizeMode:"contain",
        width: SIZES.width -80,
        height: SIZES.height -300,
    },
    loadingContainer: {
        // flex: 1,
        height: SIZES.height,
        width: SIZES.width,
        alignItems: "center",
        alignContent: "center",
    },
})

export default styles;