import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} className="project-cards">
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Restaurant Lookup</CardTitle>
                        <CardText>
                            Search app where users search and keep track of restaurants they have been to using Google Places API
                        </CardText>
                        <CardActions border className="card-action-button-container">
                            <Button href="https://github.com/akshay1dhingra/React-Restaurant-Lookup" target="_blank" colored>GitHub</Button>
                        </CardActions>
                    </Card>

                    {/* project 2 */}
                    <Card shadow={5} className="project-cards">
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >TicTacToe</CardTitle>
                        <CardText>
                            Full stack TicTacToe application with a custom Rails API
                    </CardText>
                        <CardActions border className="card-action-button-container">
                            <Button href="https://github.com/akshay1dhingra/TicTacToe-JS-RailsAPI" target="_blank" colored>GitHub</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} className="project-cards">
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f8f09554-8991-4572-b2f6-eb2430e97462/ruby-on-rails.png) center / cover' }} >Gamers Unite</CardTitle>
                        <CardText>
                            Review website where users can write reviews about games. Built with JS and Rails
                        </CardText>
                        <CardActions border className="card-action-button-container">
                            <Button href="https://github.com/akshay1dhingra/gamers_unite" target="_blank" colored>GitHub</Button>
                            <Button href="https://www.youtube.com/watch?v=rID3s9EEXBY&t=3s" target="_blank" colored>YouTube</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* project 2 */}
                    <Card shadow={5} className="project-cards">
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f8f09554-8991-4572-b2f6-eb2430e97462/ruby-on-rails.png) center / cover' }} >Wine Cellar</CardTitle>
                        <CardText>
                            Keep track of your wine collection with this app. Built with Sinatra and ActiveRecord
                        </CardText>
                        <CardActions border className="card-action-button-container">
                            <Button href="https://github.com/akshay1dhingra/sinatra-wine-cellar" target="_blank" colored>GitHub</Button>
                            <Button href="https://www.youtube.com/watch?v=N1XUP8qATt0&t=1s" target="_blank" colored>YouTube</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>

                    {/* project 3 */}
                    <Card shadow={5} className="project-cards">
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f8f09554-8991-4572-b2f6-eb2430e97462/ruby-on-rails.png) center / cover' }} >CryptoCurrency Tracker</CardTitle>
                        <CardText>
                            Scrapes crypocurrency information and allows users to interact in their terminal
                        </CardText>
                        <CardActions border className="card-action-button-container">
                            <Button href="https://github.com/akshay1dhingra/sinatra-wine-cellar" target="_blank" colored>GitHub</Button>
                            <Button href="https://www.youtube.com/watch?v=8mkADw5GOHg" target="_blank" colored>YouTube</Button>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Rails</Tab>
                </Tabs>

                {/* <section className="projects-grid"> */}
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                {/* </section> */}
            </div>
        )
    }
}

export default Projects;