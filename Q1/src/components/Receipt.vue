<template>
    <v-container>
        <v-row><h2>Input item</h2></v-row>
        <v-row>
            <v-col lg="4">
                <v-text-field
                label="Resto Name"
                v-model="restoName"
                :disabled="print === true"
                ></v-text-field> <!--Disabled input when user printed the payment receipt -->
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="4">
                <v-text-field
                label="Date of Print"
                v-model="datePrint"
                :disabled="print === true"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="4">
                <v-text-field
                label="Cashier Name"
                v-model="cashierName"
                :disabled="print === true"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="4">
                <v-text-field
                label="Item"
                v-model="item"
                :disabled="print === true"
                @keyup.enter="pushItems"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="4">
                <v-text-field
                label="Price"
                v-model="price"
                :disabled="print === true"
                @keyup.enter="pushItems"
                ></v-text-field>
            </v-col>
        </v-row>
        
        <!-- <v-row>
            <v-btn @click="printReceipt()">Print</v-btn>
        </v-row> -->

        <!--Only show when user input 'exit' and enter that-->
       <div v-if="print">
           <v-row class="item">
               <span>{{getRestoName}}</span>
           </v-row>
           <v-row class="item">
               <span>{{getDatePrint}}</span>
           </v-row>
            <v-row class="item">
               <span>{{getCashierName}}</span>
           </v-row>
           <v-row>==========================</v-row>
           <v-row class="item" v-for="(item,index) in items" :key="index">
               <span>{{changeOutput(item)}}</span>
           </v-row>
           <v-row class="item item-total">
               <span>
                   Total . . . . . . . . . . . . . . . . . .{{getTotal}}
               </span>
           </v-row>
       </div>
    </v-container>
</template>

<script>
// import datetime library
import dayjs from 'dayjs'

export default {
    data: () => ({
        // Resto data
        restoName: null,
        datePrint: null,
        cashierName: null,
        item: null,
        price: null,
        // Data array
        items: [],
        total: [],
        // Constraint
        print: false,
        maxChar: 30
    }),
    computed: {
        getRestoName() {
           let input = this.restoName;
           // returns the value of a number rounded to the nearest integer.
           let space = Math.round((this.maxChar - input.length) / 2);
           if (space < 0) {
               space = 60 - input.length;
           }
           let spaces = "";
           for (let i = 0; i <= space; i++) {
               spaces += "\u00A0"; // Line feed
           }
           return spaces + input;
        },
        getDatePrint() {
            let string = "Tanggal :";
            let date = dayjs(this.datePrint).format("DD/MM/YYYY HH:mm:ss");
            let space = this.maxChar - string.length - date.length;
            if (space < 0) {
                space = 60 - string.length - date.length;
            }
            let spaces = "";
             for (let i = 0; i <= space; i++) {
               spaces += "\u00A0"; // Line feed
            }
            return string + spaces + date
        },
        getCashierName() {
            let string = "Nama Kasir :";
            let input = this.cashierName;
            let space = this.maxChar - string.length - input.length;
            if (space < 0) {
                space = 60 - string.length - input.length;
            }
            let spaces = "";
            for (let i = 0; i <= space; i++) {
               spaces += "\u00A0"; // Line feed
            }
            return string + spaces + input
        },
        getTotal() {
            // Sum the price from items
            let total = "Rp" + this.total.reduce(function(a, b){
                return a + b;
            }, 0);

            // RegExp price with (.)
            return total.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    methods: {
        pushItems() {
            // if user input & enter 'exit' print is true
            if(this.item.toLowerCase() === "exit") {
                this.print = true
            } else if (this.item || this.price) {
                let data = {
                    item: this.item,
                    price: this.price
                }
                this.items.push(data);
                // Change string to integer
                this.total.push(parseInt(this.price))
            }
        },
        // Change output data from items
        changeOutput(data) {
            let item = data.item;
            // RegExp price with (.)
            let price = "Rp. " + data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            let space = this.maxChar - item.length - price.length;
            if (space < 0) {
                space = 60 - item.length - price.length;
            }
            let dot = "";
            for (let i = 0; i <= space; i++) {
               dot += " . "; // dot character
            }
            return item + dot + price
        }
    }
}
</script>

<style scoped>
    .item {
        max-width: 27%;
    }

    .item-total {
        margin-top: 50px !important;
    }
</style>