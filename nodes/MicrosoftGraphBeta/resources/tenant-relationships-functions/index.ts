import type { INodeProperties } from 'n8n-workflow';

export const tenantRelationshipsFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Functions"
					]
				}
			},
			"options": [
				{
					"name": "Tenant Relationships Find Tenant Information By Domain Name",
					"value": "Tenant Relationships Find Tenant Information By Domain Name",
					"action": "Invoke function findTenantInformationByDomainName",
					"description": "Invoke function findTenantInformationByDomainName",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/microsoft.graph.findTenantInformationByDomainName(domainName='{{$parameter[\"domainName\"]}}')"
						}
					}
				},
				{
					"name": "Tenant Relationships Find Tenant Information By Tenant Id",
					"value": "Tenant Relationships Find Tenant Information By Tenant Id",
					"action": "Invoke function findTenantInformationByTenantId",
					"description": "Invoke function findTenantInformationByTenantId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/microsoft.graph.findTenantInformationByTenantId(tenantId='{{$parameter[\"tenantId\"]}}')"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tenantRelationships/microsoft.graph.findTenantInformationByDomainName(domainName='{domainName}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Functions"
					],
					"operation": [
						"Tenant Relationships Find Tenant Information By Domain Name"
					]
				}
			}
		},
		{
			"displayName": "Domain Name",
			"name": "domainName",
			"required": true,
			"description": "Usage: domainName='{domainName}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Functions"
					],
					"operation": [
						"Tenant Relationships Find Tenant Information By Domain Name"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/microsoft.graph.findTenantInformationByTenantId(tenantId='{tenantId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Functions"
					],
					"operation": [
						"Tenant Relationships Find Tenant Information By Tenant Id"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"required": true,
			"description": "Usage: tenantId='{tenantId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Functions"
					],
					"operation": [
						"Tenant Relationships Find Tenant Information By Tenant Id"
					]
				}
			}
		},
];
