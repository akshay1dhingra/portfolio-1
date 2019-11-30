import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ paddingTop: '.5em' }}>Akshay Dhingra</h2>
                            <h4 style={{ color: 'grey' }}>Frontend Engineer</h4>
                            <hr style={{ borderTop: '3px solid #883fb2', width: '100%' }} />
                            <p>
                                I began my journey as a developer a bit later than most people you may know, but it was life changing for me.
                                I graduated from University of Illinois at Chicago with a Biology degree with the plan of going to medical school, but
                                the downturn of the recession forced me to make a hard decision which lead me to a career in sales. Having worked in
                                different capacities, such as Real Estate broker and a SaaS salesman, it was 3 years ago that I had started coding. I joined and completed the Flatiron School Bootcamp, and
                                have worked with a number of companies and developement teams since then. I am now looking to join a team that will allow me to grow as a
                                developer while contributing to a good cause.
                            </p>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={"2017"}
                            schoolName={"Flatiron School"}
                            schoolDescription={"Fullstack Coding Bootcamp focusing in React/Redux, JS/HTML/CSS, Ruby/Rails, SQLite, ActiveRecord and Sinatra"}
                        />
                        <Education
                            startYear={"2008 - "}
                            endYear={"2013"}
                            schoolName={"University of Illinois at Chicago"}
                            schoolDescription={"BS in Biology. Studied the natural sciences and pre-medical courses including Chemistry, Physics and Evolution"}
                        />
                        <h2>Experience</h2>
                        <Experience
                            startYear={"2018"}
                            endYear={"current"}
                            companyName={"Albert.io"}
                            companyTitle={"Frontend Engineer"}
                            companyDescription={"Used React, SCSS, and other 3rd party libraries to architect and develop user-facing features. Helped migrate the project from React 15 to 16 by removing deprecated code and implementing hooks. Created reusable, context-agnostic design system components. Worked with two project managers, eleven developers and quality assurance contributors to resolve technical issues"}
                        />
                        <Experience
                            startYear={"2018"}
                            endYear={"2018"}
                            companyName={"CDM Media"}
                            companyTitle={"Web Application Developer"}
                            companyDescription={"Worked closely with the CTO in refactoring Javascript and React code for an internal application. Removed dangerous bugs and deprecated code while maintaining proper functionality. Performed rigorous QA testing for the release of version 2 of the product"}
                        />
                        <Experience
                            startYear={"2017"}
                            endYear={"2017"}
                            companyName={"EZ Funnls"}
                            companyTitle={"UI Developer"}
                            companyDescription={"Built reusable React components using popular libraries such as Material UI and ImmutableJS. Built and maintained static landing pages for various drop-ship products. Built wordpress pages for various blog and podcast sites "}
                        />
                        <h2>Skills</h2>
                        <Skills
                            skill="React"
                            progress={100}
                        />
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="GraphQL"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;