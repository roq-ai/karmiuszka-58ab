import { PillowInterface } from 'interfaces/pillow';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  pillow_id?: string;
  quantity: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  pillow?: PillowInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  pillow_id?: string;
  organization_id?: string;
}
