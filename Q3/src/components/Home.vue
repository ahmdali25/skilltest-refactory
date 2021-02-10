<template>
    <div>
        <div>
            <h3>Items in the meeting room</h3>
        </div>
        <div v-for="item in findItemsInMeetingRoom" :key="item.name">
            {{item.name}}
        </div>
        <div>
            <h3>All electronic Devices</h3>
        </div>
        <div v-for="item in findElectronicDevices" :key="item.name">
            {{item.name}}
        </div>
        <div>
            <h3>All Furniture</h3>
        </div>
        <div v-for="item in findAllFurniture" :key="item.name">
            {{item.name}}
        </div>
        <div>
            <h3>Items Purchased at 16 Januari 2020</h3>
        </div>
        <div v-for="item in findItemPurchasedAt" :key="item.name">
            {{item.name}}
        </div>
        <div>
            <h3>All items with brown color</h3>
        </div>
        <div v-for="item in findItemsWithBrownColor" :key="item.name">
            {{item.name}}
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
            "inventory_id": 9382,
            "name": "Brown Chair",
            "type": "furniture",
            "tags": [
                "chair",
                "furniture",
                "brown"
            ],
            "purchased_at": 1579190471,
            "placement": {
                "room_id": 3,
                "name": "Meeting Room"
            }
            },
            {
            "inventory_id": 9380,
            "name": "Big Desk",
            "type": "furniture",
            "tags": [
                "desk",
                "furniture",
                "brown"
            ],
            "purchased_at": 1579190642,
            "placement": {
                "room_id": 3,
                "name": "Meeting Room"
            }
            },
            {
            "inventory_id": 2932,
            "name": "LG Monitor 50 inch",
            "type": "electronic",
            "tags": [
                "monitor"
            ],
            "purchased_at": 1579017842,
            "placement": {
                "room_id": 3,
                "name": "Lavender"
            }
            },
            {
            "inventory_id": 232,
            "name": "Sharp Pendingin Ruangan 2PK",
            "type": "electronic",
            "tags": [
                "ac"
            ],
            "purchased_at": 1578931442,
            "placement": {
                "room_id": 5,
                "name": "Dhanapala"
            }
            },
            {
            "inventory_id": 9382,
            "name": "Alat Makan",
            "type": "tableware",
            "tags": [
                "spoon",
                "fork",
                "tableware"
            ],
            "purchased_at": 1578672242,
            "placement": {
                "room_id": 10,
                "name": "Rajawali"
            }
            }
        ]
       }   
   },
   computed: {
       findItemsInMeetingRoom() {
           return this.data.filter(item => item.placement.name === "Meeting Room");
       },
       findElectronicDevices() {
           return this.data.filter(item => item.type === "electronic");
       },
       findAllFurniture() {
           return this.data.filter(item => item.type === "furniture");
       },
       findItemPurchasedAt() {
           return this.data.filter(item => dayjs.unix(item.purchased_at).format("MM/DD/YYYY") === "01/16/2020")
       },
       findItemsWithBrownColor() {
           return this.data.filter(item => {
               if(item.tags.includes("brown")) {
                 return item
               } 
           });
       },
   }
}
</script>