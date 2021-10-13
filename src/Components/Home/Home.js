import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
import { useStyles } from "./styles";
import axios from "axios";
import { Rating } from "@mui/material";

export default function Home() {
  const classes = useStyles();

  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState(false);

  const getCardContent = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  React.useEffect(() => {
    getCardContent();
  }, []);

  const handleSearch = (value) => {
    setSearch(true);
    const searchItem = data.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setData(searchItem);
  };

  const handleSorting = (type) => {
    switch (type) {
      case "title":
        let arrays1 = [...data];
        for (let i = 0; i < arrays1.length; i++) {
          for (let j = i + 1; j < arrays1.length; j++) {
            if (arrays1[i].title > arrays1[j].title) {
              let t = arrays1[i];
              arrays1[i] = arrays1[j];
              arrays1[j] = t;
            }
          }
        }
        setData(arrays1);
        break;
      case 'price':
        let arrays= [...data]
        for (let i = 0; i < arrays.length; i++) {
          for (let j = i + 1; j < arrays.length; j++) {
            if (arrays[i].price > arrays[j].price) {
              let t = arrays[i];
              arrays[i] = arrays[j];
              arrays[j] = t;
            }
          }
        }
        setData(arrays)
        break;
      case 'category':
        let arrays2 = [...data];
        for (let i = 0; i < arrays2.length; i++) {
          for (let j = i + 1; j < arrays2.length; j++) {
            if (arrays2[i].category > arrays2[j].category) {
              let t = arrays2[i];
              arrays2[i] = arrays2[j];
              arrays2[j] = t;
            }
          }
        }
        setData(arrays2)
        break;
      case 'rating':
        let arrays3=[...data]
        for (let i = 0; i < arrays3.length; i++) {
          for (let j = i + 1; j < arrays3.length; j++) {
            if (arrays3[i].rating.rate > arrays3[j].rating.rate) {
              let t = arrays3[i];
              arrays3[i] = arrays3[j];
              arrays3[j] = t;
            }
          }
        }
        setData(arrays3)
        break;
      default:
        break;
    }
    // setData(allData);
  };

  const resetPage = (e) => {
    if (e.target.value.length === 0) {
      setSearch(false);
      getCardContent()
    }
  };

  return (
    <div>
      <Header search={handleSearch} onchange={resetPage} sort={handleSorting} />
      <div class={classes.mainDiv}>
        <Grid container spacing={3} justifyContent="center">
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card key={index}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={item.image} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={item.rating.rate}
                      readOnly
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
