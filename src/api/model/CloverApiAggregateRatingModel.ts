import type { ICloverApiAggregateRating } from '../interface';

export class CloverApiAggregateRatingModel implements ICloverApiAggregateRating {
    reviewCount: number;
    totalStars: number;
}
