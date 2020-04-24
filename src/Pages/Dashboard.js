import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';
import Main from '../SubPages/Main';
import Employee from '../SubPages/Employees/Employee';
import AddEmployee from '../SubPages/Employees/AddEmployee'; 


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div></div>,
    main: () => <Main/>
  },
  {
    path: "/employee",
    sidebar: () => <div></div>,
    main: () => <Employee/>
  },
  {
    path: "/addemployee",
    sidebar: () => <div></div>,
    main: () => <AddEmployee/>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div></div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default class dashboard extends Component {
    state = {
        collapsed: true,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

render(){
  return (
    <Router>

      <div style={{ display: "flex" }}>
      <Layout>
  
      <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
 
    <Layout>


    <Sider  collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={200} className="site-layout-background">
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1099" to="/"  title="spleete" style={{background: '#F3AC21'}}>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.27 22.24C13.82 22.24 16.4 19.48 16.4 16.27C16.4 8.56 3.68 11.77 3.68 6.64C3.68 4.81 5.21 3.31 8.78 3.31C10.64 3.31 12.71 3.85 14.54 5.02L15.53 2.62C13.79 1.42 11.24 0.76 8.78 0.76C3.26 0.76 0.74 3.52 0.74 6.76C0.74 14.56 13.46 11.32 13.46 16.45C13.46 18.28 11.9 19.69 8.27 19.69C5.57 19.69 2.9 18.67 1.34 17.26L0.23 19.6C1.91 21.16 5.06 22.24 8.27 22.24ZM21.6388 22.18C22.7188 22.18 23.6188 21.31 23.6188 20.11C23.6188 18.91 22.7188 18.07 21.6388 18.07C20.5288 18.07 19.5988 18.91 19.5988 20.11C19.5988 21.31 20.5288 22.18 21.6388 22.18Z" fill="#FEFEFE"/>
                </svg>
              <span></span>
          </Menu.Item>


          <Menu.Item key="1" to="/"  title="Home">
            <svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6317 6.44758C12.4283 6.44758 12.2633 6.58855 12.2633 6.76236V12.3705H8.31097V8.85005C8.31097 8.67624 8.14602 8.53527 7.94264 8.53527H5.05742C4.85404 8.53527 4.68909 8.67624 4.68909 8.85005V11.6415C4.68909 11.8153 4.85404 11.9563 5.05742 11.9563C5.2608 11.9563 5.42575 11.8153 5.42575 11.6415V9.16484H7.57431V12.3705H0.736652V4.66559L6.49997 0.718257L12.4013 4.76008C12.56 4.86883 12.7918 4.8469 12.919 4.71128C13.0462 4.57561 13.0207 4.37756 12.8619 4.2688L6.7303 0.0691736C6.59573 -0.0230579 6.4042 -0.0230579 6.26964 0.0691736L0.137999 4.2688C0.0507675 4.32856 0 4.41885 0 4.51444V12.6852C0 12.859 0.164887 13 0.368326 13H12.6317C12.8351 13 13 12.859 13 12.6852V6.76236C13 6.58849 12.8351 6.44758 12.6317 6.44758Z" fill="white"/>
            </svg>
            <span></span>
            </Menu.Item>

        <Menu.Item key="2"   title="Profile"><Link to="/bubblegum">
        <svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6.5C13 2.90752 10.0929 0 6.5 0C2.90752 0 0 2.90713 0 6.5C0 10.0606 2.88283 13 6.5 13C10.1023 13 13 10.077 13 6.5ZM6.5 0.761719C9.66411 0.761719 12.2383 3.33589 12.2383 6.5C12.2383 7.65746 11.894 8.76998 11.2556 9.71231C8.69193 6.95465 4.31274 6.94969 1.74442 9.71231C1.10598 8.76998 0.761719 7.65746 0.761719 6.5C0.761719 3.33589 3.33589 0.761719 6.5 0.761719ZM2.2195 10.3213C4.4989 7.76457 8.50169 7.76517 10.7804 10.3213C8.49336 12.88 4.50753 12.8808 2.2195 10.3213Z" fill="white"/>
<path d="M6.5 6.88086C7.76001 6.88086 8.78516 5.85571 8.78516 4.5957V3.83398C8.78516 2.57397 7.76001 1.54883 6.5 1.54883C5.23999 1.54883 4.21484 2.57397 4.21484 3.83398V4.5957C4.21484 5.85571 5.23999 6.88086 6.5 6.88086ZM4.97656 3.83398C4.97656 2.99391 5.65993 2.31055 6.5 2.31055C7.34007 2.31055 8.02344 2.99391 8.02344 3.83398V4.5957C8.02344 5.43578 7.34007 6.11914 6.5 6.11914C5.65993 6.11914 4.97656 5.43578 4.97656 4.5957V3.83398Z" fill="white"/>
</svg>

</Link></Menu.Item>

        <Menu.Item key="3"  title="Unfinished"><Link to="/shoelaces">
          <svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0406 0.609767H10.8421C10.7093 0.609767 10.6015 0.69506 10.6015 0.800189C10.6015 0.905368 10.7093 0.99061 10.8421 0.99061H10.9908V11.5057H2.0094V0.99061H3.0107V1.42318C3.0107 1.75479 3.35144 2.0245 3.77039 2.0245H4.90778C5.02151 2.52141 5.57218 2.89935 6.23202 2.89935H6.76804C7.42782 2.89935 7.97849 2.52141 8.09222 2.0245H9.22961C9.64862 2.0245 9.9895 1.75474 9.9895 1.42318V0.601375C9.9895 0.269764 9.64862 0 9.22967 0H3.77039C3.35144 0 3.0107 0.269764 3.0107 0.601375V0.609767H0.959465C0.430384 0.609767 0 0.950532 0 1.36917V9.0136C0 9.11883 0.107692 9.20403 0.240573 9.20403C0.373325 9.20403 0.481146 9.11883 0.481146 9.0136V1.36917C0.481146 1.16048 0.695888 0.99061 0.959465 0.99061H1.52813V11.696C1.52813 11.8012 1.63595 11.8864 1.7687 11.8864H11.2314C11.3643 11.8864 11.4719 11.8012 11.4719 11.696V0.99061H12.0406C12.3044 0.99061 12.5189 1.16048 12.5189 1.36917V12.2404C12.5189 12.4493 12.3044 12.6192 12.0406 12.6192H0.959465C0.695888 12.6192 0.481146 12.4493 0.481146 12.2404V9.91119C0.481146 9.80611 0.373325 9.72077 0.240573 9.72077C0.107692 9.72077 0 9.80611 0 9.91119V12.2404C0 12.6593 0.430384 13 0.959465 13H12.0406C12.5697 13 13 12.6593 13 12.2404V1.36917C13 0.950532 12.5697 0.609767 12.0406 0.609767ZM3.49184 0.601375C3.49184 0.479767 3.61675 0.380894 3.77039 0.380894H9.22967C9.38331 0.380894 9.50822 0.479767 9.50822 0.601375V1.42318C9.50822 1.54479 9.38331 1.64366 9.22967 1.64366H7.87337C7.74042 1.64366 7.63279 1.72895 7.63279 1.83408C7.63279 2.21152 7.24482 2.51851 6.76804 2.51851H6.23202C5.75525 2.51851 5.36733 2.21152 5.36733 1.83408C5.36733 1.72895 5.25964 1.64366 5.12676 1.64366H3.77039C3.61675 1.64366 3.49184 1.54479 3.49184 1.42318V0.601375Z" fill="white"/>
<path d="M9.41625 8.54286H3.58379C3.45734 8.54286 3.35486 8.62595 3.35486 8.72858C3.35486 8.83116 3.45734 8.91429 3.58379 8.91429H9.41625C9.5427 8.91429 9.64518 8.83116 9.64518 8.72858C9.64518 8.62595 9.5427 8.54286 9.41625 8.54286Z" fill="white"/>
<path d="M9.41625 10.0286H3.58379C3.45734 10.0286 3.35486 10.1118 3.35486 10.2143C3.35486 10.3169 3.45734 10.4 3.58379 10.4H9.41625C9.5427 10.4 9.64518 10.3169 9.64518 10.2143C9.64518 10.1118 9.5427 10.0286 9.41625 10.0286Z" fill="white"/>
</svg>

</Link></Menu.Item>

<Menu.Item  to='/' title="Tasks">
  <svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.59476 0.419579H1.22335C0.835857 0.419579 0.52063 0.815946 0.52063 1.30315V7.61831C0.52063 8.10552 0.835857 8.50192 1.22335 8.50192H1.76618V10.8529C1.76618 11.0026 1.83789 11.1376 1.94791 11.1949C1.98433 11.2139 2.02259 11.2231 2.06052 11.2231C2.13715 11.2231 2.21242 11.1855 2.26875 11.1147L4.34664 8.50195H4.76353C4.92613 8.50195 5.05792 8.33624 5.05792 8.13179C5.05792 7.9273 4.92608 7.76159 4.76353 7.76159C4.76353 7.76159 4.21049 7.76208 4.20471 7.76282C4.13617 7.76867 4.0689 7.80416 4.01649 7.87002L2.35496 9.95925C2.35496 9.95925 2.35444 8.10837 2.35349 8.09878C2.34021 7.9098 2.21415 7.76159 2.06042 7.76159H1.22335C1.16052 7.76159 1.10943 7.69732 1.10943 7.61834V1.30315C1.10943 1.22414 1.16054 1.15991 1.22335 1.15991H9.59476C9.6576 1.15991 9.70868 1.22417 9.70868 1.30315V3.72601C9.70868 3.93047 9.84052 4.09618 10.0031 4.09618C10.1656 4.09618 10.2975 3.93047 10.2975 3.72601V1.30315C10.2975 0.815946 9.98223 0.419579 9.59476 0.419579Z" fill="white"/>
<path d="M12.2973 4.9473H6.43746C6.04999 4.9473 5.73474 5.34366 5.73474 5.8309V10.1391C5.73474 10.6263 6.04997 11.0227 6.43746 11.0227H10.1061L11.5924 12.8916C11.6487 12.9624 11.724 13 11.8006 13C11.8385 13 11.8768 12.9908 11.9132 12.9718C12.0232 12.9145 12.0949 12.7796 12.0949 12.6298V11.0226H12.2973C12.6847 11.0226 13 10.6263 13 10.139V5.83087C13 5.34366 12.6848 4.9473 12.2973 4.9473ZM12.4112 10.1391C12.4112 10.218 12.3601 10.2823 12.2973 10.2823H11.8007C11.6458 10.2823 11.5191 10.4328 11.5074 10.6239C11.5067 10.632 11.5062 11.7361 11.5062 11.7361L10.4373 10.3921C10.4362 10.3907 10.435 10.3894 10.4339 10.388C10.4297 10.3828 10.4257 10.3783 10.422 10.3743C10.3702 10.3172 10.3025 10.2823 10.2282 10.2823H6.43746C6.37463 10.2823 6.32354 10.218 6.32354 10.139V5.83087C6.32354 5.75186 6.37465 5.68762 6.43746 5.68762H12.2973C12.3601 5.68762 12.4112 5.75189 12.4112 5.83087V10.1391Z" fill="white"/>
<path d="M9.36745 7.61481C9.20495 7.61481 9.07306 7.78064 9.07306 7.98497C9.07306 8.1893 9.20495 8.35514 9.36745 8.35514C9.52997 8.35514 9.66183 8.1893 9.66183 7.98497C9.66183 7.78064 9.52995 7.61481 9.36745 7.61481Z" fill="white"/>
<path d="M8.08802 2.86687H2.73012C2.56754 2.86687 2.43573 3.03259 2.43573 3.23704C2.43573 3.44149 2.56757 3.6072 2.73012 3.6072H8.08802C8.25059 3.6072 8.38241 3.44149 8.38241 3.23704C8.38241 3.03259 8.25059 2.86687 8.08802 2.86687Z" fill="white"/>
<path d="M4.7635 5.31423H2.73012C2.56754 5.31423 2.43573 5.47994 2.43573 5.6844C2.43573 5.88885 2.56757 6.05456 2.73012 6.05456H4.7635C4.9261 6.05456 5.05789 5.88885 5.05789 5.6844C5.05789 5.47994 4.92608 5.31423 4.7635 5.31423Z" fill="white"/>
<path d="M7.9994 7.61481C7.83693 7.61481 7.70502 7.78064 7.70502 7.98497C7.70502 8.1893 7.83693 8.35514 7.9994 8.35514C8.16193 8.35514 8.29379 8.1893 8.29379 7.98497C8.29379 7.78064 8.16193 7.61481 7.9994 7.61481Z" fill="white"/>
<path d="M10.7352 7.61481C10.5727 7.61481 10.4408 7.78064 10.4408 7.98497C10.4408 8.1893 10.5727 8.35514 10.7352 8.35514C10.8977 8.35514 11.0296 8.1893 11.0296 7.98497C11.0296 7.78064 10.8977 7.61481 10.7352 7.61481Z" fill="white"/>
<path d="M0.243738 0.612956C0.378351 0.612956 0.487477 0.475741 0.487477 0.306478C0.487477 0.137215 0.378351 0 0.243738 0C0.109125 0 0 0.137215 0 0.306478C0 0.475741 0.109125 0.612956 0.243738 0.612956Z" fill="white"/>
</svg>
</Menu.Item>


<Menu.Item to='/'  title="Reports">
<svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.21642 0.323687C9.21994 0.239687 9.19584 0.154272 9.14351 0.0901252C9.09119 0.0259787 9.02152 -0.00360131 8.95301 0.000738731C8.94897 0.000523268 8.94497 0 8.94086 0H7.42192C7.28326 0 7.17086 0.137804 7.17086 0.307805C7.17086 0.477805 7.28326 0.615609 7.42192 0.615609H8.35982L5.87788 3.6585L4.94192 2.51101C4.89485 2.45329 4.83098 2.42085 4.76439 2.42085C4.69781 2.42085 4.63394 2.45329 4.58687 2.51101L0.0735301 8.04441C-0.02451 8.16461 -0.02451 8.35951 0.0735301 8.47974C0.122563 8.53979 0.18681 8.56983 0.251057 8.56983C0.315304 8.56983 0.379576 8.53979 0.428584 8.47968L4.76439 3.16392L5.70036 4.31142C5.7984 4.43162 5.95737 4.43162 6.05544 4.31142L8.7149 1.05094V2.09162C8.7149 2.26162 8.8273 2.39943 8.96596 2.39943C9.10462 2.39943 9.21702 2.26162 9.21702 2.09162V0.338585C9.21702 0.333568 9.2166 0.328674 9.21642 0.323687Z" fill="white"/>
<path d="M12.7489 12.3844H12.1983V2.58193C12.1983 2.12567 11.8955 1.75449 11.5234 1.75449H10.2925C9.92039 1.75449 9.61763 2.1257 9.61763 2.58193V12.3844H8.21941V7.02321C8.21941 6.56695 7.91666 6.19577 7.54451 6.19577H6.31369C5.94154 6.19577 5.63879 6.56698 5.63879 7.02321V12.3844H4.24056V9.60787C4.24056 9.15161 3.93778 8.78043 3.56566 8.78043H2.33482C1.96267 8.78043 1.65991 9.15164 1.65991 9.60787V12.3844H1.07955C0.940892 12.3844 0.828491 12.5222 0.828491 12.6922C0.828491 12.8622 0.940892 13 1.07955 13H12.7489C12.8876 13 13 12.8622 13 12.6922C13 12.5222 12.8876 12.3844 12.7489 12.3844ZM3.73839 12.3844H2.16201V9.60787C2.16201 9.49106 2.23952 9.39604 2.33479 9.39604H3.56561C3.66089 9.39604 3.73839 9.49106 3.73839 9.60787V12.3844ZM7.71726 12.3844H6.14089V7.02321C6.14089 6.90639 6.21839 6.81138 6.31367 6.81138H7.54448C7.63973 6.81138 7.71726 6.90639 7.71726 7.02321V12.3844ZM11.6961 12.3844H10.1198V2.58193C10.1198 2.46511 10.1973 2.3701 10.2925 2.3701H11.5234C11.6186 2.3701 11.6961 2.46511 11.6961 2.58193V12.3844Z" fill="white"/>
</svg>

</Menu.Item>
         </Menu>
      </Sider>
      <Layout style={{ padding: '0 ' }}>
        <Content
          className="site-layout-background"
          style={{
            margin: 0,
            minHeight: 280,
          }}
        >
           <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}

          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>


      </div>
    </Router>
  );

            }
}
