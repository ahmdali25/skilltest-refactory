<template>
    <div>
        <div>
            <h3>User dont have phone number</h3>
        </div>
        <div v-for="item in findUserDontHavePhoneNum" :key="item.name">
            {{item.profile.full_name}}
        </div>
        <div>
            <h3>User have "annis" on their names</h3>
        </div>
        <div v-for="item in findUserHaveAnnis" :key="item.name">
            {{item.profile.full_name}}
        </div>
        <div><h3>Users who have articles on the year 2020</h3></div>
        <div v-for="item in findUserHaveArticlesOn" :key="item.name">
            {{item.profile.full_name}}
        </div>
        <div>
            <h3>Users who are born in 1986</h3>
        </div>
        <div v-for="item in findUserByBirthday" :key="item.name">
            {{item.profile.full_name}}
        </div>
        <div><h3>Articles that contain "tips" on the title</h3></div>
        <div v-for="item in findArticlesThatContainTips" :key="item.name">
            {{item.title}}
        </div>
        <div><h3>Articles published before August 2019.</h3></div>
        <div v-for="item in findArticlesYearBefore" :key="item.name">
            {{item.title}}
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
   data() {
       return {
           data: [
        {
            id: 323,
            username: "rinood30",
            profile: {
            full_name: "Shabrina Fauzan",
            birthday: "1988-10-30",
            phones: [
                "08133473821",
                "082539163912"
            ]
            },
            articles: [
            {
                id: 3,
                title: "Tips Berbagi Makanan",
                published_at: "2019-01-03T16:00:00"
            },
            {
                id: 7,
                title: "Cara Membakar Ikan",
                published_at: "2019-01-07T14:00:00"
            }
            ]
        },
        {
            id: 201,
            username: "norisa",
            profile: {
            full_name: "Noor Annisa",
            birthday: "1986-08-14",
            phones: []
            },
            articles: [
            {
                id: 82,
                title: "Cara Membuat Kue Kering",
                published_at: "2019-10-08T11:00:00"
            },
            {
                id: 91,
                title: "Cara Membuat Brownies",
                published_at: "2019-11-11T13:00:00"
            },
            {
                id: 31,
                title: "Cara Membuat Brownies",
                published_at: "2019-11-11T13:00:00"
            }
            ]
        },
        {
            id: 42,
            username: "karina",
            profile: {
            full_name: "Karina Triandini",
            birthday: "1986-04-14",
            phones: [
                "06133929341"
            ]
            },
            articles: []
        },
        {
            id: 201,
            username: "icha",
            profile: {
            full_name: "Annisa Rachmawaty",
            birthday: "1987-12-30",
            phones: []
            },
            articles: [
            {
                id: 39,
                title: "Tips Berbelanja Bulan Tua",
                published_at: "2019-04-06T07:00:00"
            },
            {
                id: 43,
                title: "Cara Memilih Permainan di Steam",
                published_at: "2019-06-11T05:00:00"
            },
            {
                id: 58,
                title: "Cara Membuat Brownies",
                published_at: "2019-09-12T04:00:00"
            }
            ]
        }
        ]
       }   
   },
   computed: {
       findUserDontHavePhoneNum() {
           return this.data.filter(item => item.profile.phones.length == 0);
       },
       findUserHaveAnnis() {
           return this.data.filter(item => {
               if(item.profile.full_name.includes("Annis")) {
                 return item
               } 
           });
       },
       findUserHaveArticlesOn() {
           return this.data.filter(function(x) {
           x.articles.filter(y => dayjs(y.published_at).format("YYYY") === "2020");
        });
       },
        findUserByBirthday() {
            return this.data.filter(item => dayjs(item.profile.birthday).format("YYYY") === "1986");
        },
        findArticlesThatContainTips() {
            let articles = [];
            this.data.map(function(item) {
                item.articles.forEach(function(e) {
                    if(e.title.includes("Tips")) {
                        articles.push(e);
                    }
                });
            });
            return articles; 
        },
        findArticlesYearBefore() {
            const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
            dayjs.extend(isSameOrBefore)
            let articles = [];
            this.data.map(function(item) {
                item.articles.forEach(function(e) {
                    if (dayjs(e.published_at).isSameOrBefore("2019-08")) {
                        articles.push(e);
                    }
                })
            })
            return articles;
        }
    }

}
</script>