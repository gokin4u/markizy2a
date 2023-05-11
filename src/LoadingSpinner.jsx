import { Grid } from 'react-loader-spinner'

export function LoadingSpinner() {
    return <Grid
        height="80"
        width="80"
        color="#0004ffba"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="spinner-1"
        visible={true}
    />
}