import { ResultsData } from './results-data';

export interface DataMovie {
    page: number;
    results: ResultsData[];
    total_pages: number;
    total_results: number;
}
