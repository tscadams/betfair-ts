/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketBettingType from '../sport/enum/MarketBettingType';
import MarketLineRangeInfo from '../sport/MarketLineRangeInfo';
import PriceLadderDescription from '../sport/PriceLadderDescription';
export default class MarketDescription extends JsonMember {
    private persistenceEnabled;
    private bspMarket;
    private marketTime;
    private suspendTime;
    private settleTime;
    private bettingType;
    private turnInPlayEnabled;
    private marketType;
    private regulator;
    private marketBaseRate;
    private discountAllowed;
    private wallet;
    private rules;
    private rulesHasDate;
    private clarifications;
    private eachWayDivisor;
    private lineRangeInfo;
    private raceType;
    private priceLadderDescription;
    constructor(persistenceEnabled?: boolean | null, bspMarket?: boolean | null, marketTime?: Date | null, suspendTime?: Date | null, settleTime?: Date | null, bettingType?: MarketBettingType, turnInPlayEnabled?: boolean | null, marketType?: string, regulator?: string, marketBaseRate?: number | null, discountAllowed?: boolean | null, wallet?: string, rules?: string, rulesHasDate?: boolean | null, clarifications?: string, eachWayDivisor?: number | null, lineRangeInfo?: MarketLineRangeInfo, raceType?: string, priceLadderDescription?: PriceLadderDescription);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getPersistenceEnabled(): boolean | null;
    setPersistenceEnabled(persistenceEnabled: boolean | null): void;
    getBspMarket(): boolean | null;
    setBspMarket(bspMarket: boolean | null): void;
    getMarketTime(): Date | null;
    setMarketTime(marketTime: Date | null): void;
    getSuspendTime(): Date | null;
    setSuspendTime(suspendTime: Date | null): void;
    getSettleTime(): Date | null;
    setSettleTime(settleTime: Date | null): void;
    getBettingType(): MarketBettingType;
    setBettingType(bettingType: MarketBettingType): void;
    getTurnInPlayEnabled(): boolean | null;
    setTurnInPlayEnabled(turnInPlayEnabled: boolean | null): void;
    getMarketType(): string;
    setMarketType(marketType: string): void;
    getRegulator(): string;
    setRegulator(regulator: string): void;
    getMarketBaseRate(): number | null;
    setMarketBaseRate(marketBaseRate: number | null): void;
    getDiscountAllowed(): boolean | null;
    setDiscountAllowed(discountAllowed: boolean | null): void;
    getWallet(): string;
    setWallet(wallet: string): void;
    getRules(): string;
    setRules(rules: string): void;
    getRulesHasDate(): boolean | null;
    setRulesHasDate(rulesHasDate: boolean | null): void;
    getClarifications(): string;
    setClarifications(clarifications: string): void;
    getEachWayDivisor(): number | null;
    setEachWayDivisor(eachWayDivisor: number | null): void;
    getLineRangeInfo(): MarketLineRangeInfo;
    setLineRangeInfo(lineRangeInfo: MarketLineRangeInfo): void;
    getRaceType(): string;
    setRaceType(raceType: string): void;
    getPriceLadderDescription(): PriceLadderDescription;
    setPriceLadderDescription(priceLadderDescription: PriceLadderDescription): void;
}
