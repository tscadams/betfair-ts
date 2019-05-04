/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import AffiliateRelation from '../account/AffiliateRelation';
export default class GetAffiliateRelationResponse extends JsonResponse {
    private affiliateRelations;
    constructor(affiliateRelations?: AffiliateRelation[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAffiliateRelations(): AffiliateRelation[];
    setAffiliateRelations(affiliateRelations: AffiliateRelation[]): void;
}
