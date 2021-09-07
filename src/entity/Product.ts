import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {Category} from './Category'
import {SubCategory} from './SubCategory'
import {ProductType} from './ProductType'
import {ProductSubType} from './ProductSubType'
import {Kind} from './Kind'
import {SubKind} from './SubKind'
import {Manufacturer} from './Manufacturer'
import {Brand} from './Brand'

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
        @ManyToOne(()=>Category,(category)=> category.id)
        public category:number;
        @ManyToOne(()=>SubCategory, (subCategory)=>subCategory.id,{nullable: true})
        public subCategory: number;
        @ManyToOne(()=>ProductType,(type)=>type.id,{nullable: true })
        public type: number;
        @ManyToOne(()=>ProductSubType,(productSubType)=> productSubType.id,{nullable: true })
        public subType: number;
        @ManyToOne(()=>Kind,(kind)=>kind.id,{nullable: true })
        public kind: number;
        @ManyToOne(()=>SubKind,(subkind)=>subkind.id,{nullable: true})
        public subKind: number;
        @ManyToOne(()=>Manufacturer,(manufacturer)=> manufacturer.id,{nullable: true })
        public manufacturer: number;
        @ManyToOne(()=>Brand,(brand)=>brand.id,{nullable: true })
        public brand: number;
        @Column({nullable: true })
        public distributerType:string;
        @Column({nullable: true })
        public agency:number;
        @Column({nullable: true })
        public purcheaser:number;
        @Column({nullable: true })
        public agencyPurchaser:number;
        @Column({nullable: true})
        public caseContains:string;
        @Column({nullable: true})
        public miniumOrderQuantity:string;
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
        updateRetailPriceOldStock:boolean=true;
        @Column()
        warrantyAvailable:boolean=false;
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
        expire:number;
        @Column()
        expireUnit:String;
        @Column()
        public rackFloor:string;
        @Column()
        public rackRackNo:string;
        @Column()
        public rackShelfNo:string;
        @Column()
        public rackBoxNo:string;
        @Column()
        public storeFloor:string;
        @Column()
        public storeRackNo:string;
        @Column()
        public storeShelfNo:string;
        @Column()
        public storeBoxNo:string;
        @Column()
        public godownFloor:string;
        @Column()
        public godownRackNo:string;
        @Column()
        public godownShelfNo:string;
        @Column()
        public godownBoxNo:string;
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