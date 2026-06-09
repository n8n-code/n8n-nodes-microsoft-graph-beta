import type { INodeProperties } from 'n8n-workflow';

export const directoryOutboundSharedUserProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Outbound Shared User Profiles",
					"value": "Directory List Outbound Shared User Profiles",
					"action": "Get outboundSharedUserProfiles from directory",
					"description": "Get outboundSharedUserProfiles from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/outboundSharedUserProfiles"
						}
					}
				},
				{
					"name": "Directory Create Outbound Shared User Profiles",
					"value": "Directory Create Outbound Shared User Profiles",
					"action": "Create new navigation property to outboundSharedUserProfiles for directory",
					"description": "Create new navigation property to outboundSharedUserProfiles for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/outboundSharedUserProfiles"
						}
					}
				},
				{
					"name": "Directory Delete Outbound Shared User Profiles",
					"value": "Directory Delete Outbound Shared User Profiles",
					"action": "Delete navigation property outboundSharedUserProfiles for directory",
					"description": "Delete navigation property outboundSharedUserProfiles for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Outbound Shared User Profiles",
					"value": "Directory Get Outbound Shared User Profiles",
					"action": "Get outboundSharedUserProfiles from directory",
					"description": "Get outboundSharedUserProfiles from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Outbound Shared User Profiles",
					"value": "Directory Update Outbound Shared User Profiles",
					"action": "Update the navigation property outboundSharedUserProfiles in directory",
					"description": "Update the navigation property outboundSharedUserProfiles in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}"
						}
					}
				},
				{
					"name": "Directory Outbound Shared User Profiles List Tenants",
					"value": "Directory Outbound Shared User Profiles List Tenants",
					"action": "Get tenants from directory",
					"description": "Get tenants from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}/tenants"
						}
					}
				},
				{
					"name": "Directory Outbound Shared User Profiles Create Tenants",
					"value": "Directory Outbound Shared User Profiles Create Tenants",
					"action": "Create new navigation property to tenants for directory",
					"description": "Create new navigation property to tenants for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}/tenants"
						}
					}
				},
				{
					"name": "Directory Outbound Shared User Profiles Delete Tenants",
					"value": "Directory Outbound Shared User Profiles Delete Tenants",
					"action": "Delete navigation property tenants for directory",
					"description": "Delete navigation property tenants for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}/tenants/{{$parameter[\"tenantReference-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Directory Outbound Shared User Profiles Get Tenants",
					"value": "Directory Outbound Shared User Profiles Get Tenants",
					"action": "Get tenants from directory",
					"description": "Get tenants from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}/tenants/{{$parameter[\"tenantReference-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Directory Outbound Shared User Profiles Update Tenants",
					"value": "Directory Outbound Shared User Profiles Update Tenants",
					"action": "Update the navigation property tenants in directory",
					"description": "Update the navigation property tenants in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}/tenants/{{$parameter[\"tenantReference-tenantId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/outboundSharedUserProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory List Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/outboundSharedUserProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Create Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Create Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Create Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Create Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Delete Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Delete Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Get Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Get Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Get Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Update Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Update Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Update Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Update Outbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles List Tenants"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Create Tenants"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Create Tenants"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Create Tenants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Delete Tenants"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Delete Tenants"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Get Tenants"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Get Tenants"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Get Tenants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Update Tenants"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Update Tenants"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Outbound Shared User Profile"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Update Tenants"
					]
				}
			}
		},
];
