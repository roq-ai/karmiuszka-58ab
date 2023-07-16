import { InventoryInterface } from 'interfaces/inventory';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PillowInterface {
  id?: string;
  name: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  organization?: OrganizationInterface;
  _count?: {
    inventory?: number;
  };
}

export interface PillowGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  organization_id?: string;
}
