function withLoading(Component){
    return function enhancedComponent({isLoading, ...props}) {
        if(isLoading) {
            return <h2>loding...</h2>
        }
        return <Component {...props} />
    }
}

function UserProfile({name}){
    return <h2>User: {name}</h2>
}

const userProfileWithLoading = withLoading(UserProfile);

{/* <userProfileWithLoading isLoading={true} /> */}
<userProfileWithLoading isLoading={false} name="mishal" />

export default userProfileWithLoading