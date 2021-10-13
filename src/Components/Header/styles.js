import makeStyles from '@material-ui/styles/makeStyles'

export const defaultStyles = makeStyles((theme) => ({
    mainDiv: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    searchBar: {
        width: '20%',
        display: 'flex',
    }
}))