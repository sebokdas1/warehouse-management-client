import React from 'react';
import Title from '../Shared/Title/Title';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container-fluid'>
            <Title title="Blog"></Title>
            <div className='container'>
                <h1>What is the Difference between javascript and nodejs?</h1>
                <p>1. JavaScript is mainly used for the client-side activity for one particular web application. Some of these activities can be dynamic page display in some schedule time interval, addressing business validation or basic Ajax call kind of task.</p>
                <p>These are used most of the time for any web apps. On the other hand, Node.js is mainly used for running or accessing any operating system for the non-blocking operation.</p>
                <p>An operation like executing or creating a shell script, or getting any specific information related to the hardware on one call or the installed details of certificate in the system or various defined task which are most of the time non-blocking on an operating system.</p>
                <p>2. JavaScript programming is very easy to write (although, it is subjective as some developers find it difficult too) and put the running environment means right browser.</p>
                <p>On the other hand, Nodejs only support the V8 engine that is specific to the googles chrome. But whether it support V8 engine, written in the JavaScript code can be able to run in any given environment. Therefore, there is no constraint to it specific to the browser.</p>
                <p>3. JavaScript normally follows standard of Java Programming language. There may have different ways of writing source code but at the same time, we can say that it is following the standards of Java Programming language.</p>
                <p>On the other hand, Node.js is written in the C++, and provides V8 engine base that helps developers to run the written program of javascript in any browser environment.</p>
                <p>4. For accessing the operating system specific to any non-blocking task JavaScript has many objects but these are operating system specific. For example, an ActiveX Control which is only running in the Windows. On the other hand, Node.js is given utility to run a few operating systems.</p>
                <p>Also, it does not have any specific constraint related to operating system. Node.js is quite familiar to build a specific binding using the file system, and also allowing the web app developer for reading or sometimes write on the disk.</p>
            </div>
            <div className='container'>
                <h1>When should we use Nodejs and When should we use Mongodb?</h1>
                <p>These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.</p>
                <h5>When should we use Nodejs?</h5>
                <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...</p>
                <p>So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                <h5>When should we use Mongodb?</h5>
                <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p>
            </div>
            <div className='container'>
                <h1>What is the Difference between SQL and NoSQL?</h1>
                <p>1. SQL databases are primarily called RDBMS or Relational Databases</p>
                <p>NoSQL databases are primarily called as Non-relational or distributed database</p>
                <p>2. Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</p>
                <p>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</p>
                <p>3. SQL databases are table based databases</p>
                <p>NoSQL databases can be document based, key-value pairs, graph databases</p>
                <p>4. SQL databases are not suitable for hierarchical data storage.</p>
                <p>More suitable for the hierarchical data store as it supports key-value pair method.</p>
                <p>5. It was developed in the 1970s to deal with issues with flat file storage</p>
                <p>Developed in the late 2000s to overcome issues and limitations of SQL databases.</p>
            </div>
            <div className='container'>
                <h1>What is JWT (JSON Web Token) and How does JWT Authentication work?</h1>
                <h5>What is JWT (JSON Web Token)?</h5>
                <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architecture.</p>
                <p> JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn't have to completely rely on a data store (or) database to save session information.</p>
                <p>JWTs can be encrypted, but they are typically encoded and signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it's highly recommended to use HTTPS with Signed JWTs.</p>
                <h5>How does JWT Authentication work?</h5>
                <p>When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.</p>
                <p>By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.</p>
            </div>


        </div>
    );
};

export default Blog;