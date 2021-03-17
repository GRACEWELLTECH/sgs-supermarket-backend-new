import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Product{

        @PrimaryGeneratedColumn()
        public id: number;
        @Column()
        public productName: string;
        @Column()
        public shortName: string;
        @Column()
        public weight: number;
        @Column()
        public weightUnit: string;
        @Column()
        public category:number;
        @Column()
        public subCategory: number;
        @Column({nullable: true })
        public type: number;
        @Column({nullable: true })
        public subType: number;
        @Column({nullable: true })
        public kind: number;
        @Column({nullable: true })
        public subKind: number;
        @Column({nullable: true })
        public manufacturer: number;
        @Column({nullable: true })
        public brand: number;
        @Column({nullable: true })
        public distributerType:string;
        @Column({nullable: true })
        public agency:number;
        @Column({nullable: true })
        public purcheaser:number;
        @Column()
        public active:boolean;
        @Column()
        public GST:string;
        @Column()
        public hsnNumber:number;
        @Column({nullable: true })
        public preparationStatus:string;
        @Column({nullable: true })
        public bulkProduct: string;
        @Column({nullable: true })
        public rePackageWeight: number;
        @Column()
        public allowDecimal:boolean;
        @Column()
        public numberOfDecimalPoints:number;
        @Column()
        public alowNegativeStock:boolean;
        @Column()
        public alowSellingStockEdit:boolean;
        @Column()
        public allowLoyalty:boolean;
        @Column()
        public allowMRPSelection:boolean;
        @Column()
        public maintainExpDate:boolean;
        @Column()
        public sellingRateLessthenLandingCost:boolean;
        @Column()
        public maintainSellingRateBy:string;
        @Column()
        public minimumSellingQuantity:number;
        @Column()
        public curserDefaultFocusIn:string;
        @Column()
        public barcodeGenerationProfile:string;
        @Column()
        public applicableForOnlineSale:boolean;
        @Column()
        public color:string;
        @Column()
        public onlineType:string;
        @Column()
        public allowExchange:boolean;
        @Column()
        public warrenty:number;
        @Column()
        public warrentyUnit:String;
        @Column()
        public masterGodownStackMin:number
        @Column()
        public masterGodownStackMax:number
        @Column()
        public storeStackMin:number
        @Column()
        public storeStackMax:number
        @Column()
        public rackStackMin:number
        @Column()
        public rackStackMax:number
}

export default Product