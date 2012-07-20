
TabBarSample.FirstPageController = M.Controller.extend({

    init: function(isFirstLoad) {

        if(isFirstLoad) {

            /* place code here, that should be executed only the first time this page is loaded */

        }

        /* place code here, that should be executed every time this page is loaded */

    }

});
TabBarSample.SecondPageController = M.Controller.extend({

    init: function(isFirstLoad) {

        if(isFirstLoad) {

            /* place code here, that should be executed only the first time this page is loaded */

        }

        /* place code here, that should be executed every time this page is loaded */

    }

});
TabBarSample.ThirdPageController = M.Controller.extend({

    init: function(isFirstLoad) {

        if(isFirstLoad) {

            /* place code here, that should be executed only the first time this page is loaded */

        }

        /* place code here, that should be executed every time this page is loaded */

    }

});
TabBarSample.TabBar = M.TabBarView.design({

    childViews: 'tab1 tab2 tab3',

    anchorLocation: M.BOTTOM,

    tab1: M.TabBarItemView.design({

        value: 'Tab 1',
        page: 'page1'

    }),

    tab2: M.TabBarItemView.design({

        value: 'Tab 2',
        page: 'page2'

    }),

    tab3: M.TabBarItemView.design({

        value: 'Tab 3',
        page: 'page3'

    })

});
m_require('app/views/tab_bar.js');

TabBarSample.FirstPageView = M.PageView.design({

    events: {

        pageshow: {

            target: TabBarSample.FirstPageController,

            action: 'init'
        }

    },

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({

        value: 'Page 1'

    }),

    content: M.ScrollView.design({



    }),

    tabBar: TabBarSample.TabBar

});
m_require('app/views/tab_bar.js');

TabBarSample.SecondPageView = M.PageView.design({

    events: {

        pageshow: {

            target: TabBarSample.SecondPageController,

            action: 'init'
        }

    },

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({

        value: 'Page 2'

    }),

    content: M.ScrollView.design({



    }),

    tabBar: TabBarSample.TabBar

});
m_require('app/views/tab_bar.js');

TabBarSample.ThirdPageView = M.PageView.design({

    events: {

        pageshow: {

            target: TabBarSample.ThirdPageController,

            action: 'init'
        }

    },

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({

        value: 'Page 3'

    }),

    content: M.ScrollView.design({

        

    }),

    tabBar: TabBarSample.TabBar

});
var TabBarSample = TabBarSample || {};

TabBarSample.app = M.Application.design({

    entryPage: 'page1',

    page1: TabBarSample.FirstPageView,

    page2: TabBarSample.SecondPageView,

    page3: TabBarSample.ThirdPageView

});