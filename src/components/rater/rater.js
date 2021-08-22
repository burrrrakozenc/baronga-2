import React from 'react';
// import { withStyles } from '@material-ui/styles'
import { Box } from 'theme-ui';

// import Typography from '@material/typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRatingComponent from 'react-star-rating-component';
import HeartRate from '../icon-set/heart-icon'


// function IconContainer(props: IconContainerProps) {
//     const { value, ...other } = props;
//     return <span {...other}>{customIcons[value].icon}</span>;
//   }

// const StyledRating = withStyles({
//     iconFilled: {
//         color: '#ff6d75',
//     },
//     iconHover: {
//         color: '#ff3d47',
//     },
// })(Rating);

class Rater extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    render() {
        const { rating } = this.state;
        // const Rater = () => {
        return (
            <Box mb={3}>
                {/* <Typography component="legend">Custom icon and color</Typography> */}
                <div
                // name="customized-color"
                // defaultValue={2}
                // getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                // precision={0.5}
                // icon={<FavoriteIcon fontSize="inherit" />}
                >
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        renderStarIcon={() => <span>{HeartRate}</span>}
                        starCount={1}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                        
                    // value={8}
                    />
                </div>
            </Box>
        )

    }
}


export default Rater
