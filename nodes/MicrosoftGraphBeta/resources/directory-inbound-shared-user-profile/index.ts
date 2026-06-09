import type { INodeProperties } from 'n8n-workflow';

export const directoryInboundSharedUserProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Inbound Shared User Profiles",
					"value": "Directory List Inbound Shared User Profiles",
					"action": "Get inboundSharedUserProfiles from directory",
					"description": "Get inboundSharedUserProfiles from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/inboundSharedUserProfiles"
						}
					}
				},
				{
					"name": "Directory Create Inbound Shared User Profiles",
					"value": "Directory Create Inbound Shared User Profiles",
					"action": "Create new navigation property to inboundSharedUserProfiles for directory",
					"description": "Create new navigation property to inboundSharedUserProfiles for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/inboundSharedUserProfiles"
						}
					}
				},
				{
					"name": "Directory Delete Inbound Shared User Profiles",
					"value": "Directory Delete Inbound Shared User Profiles",
					"action": "Delete navigation property inboundSharedUserProfiles for directory",
					"description": "Delete navigation property inboundSharedUserProfiles for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/inboundSharedUserProfiles/{{$parameter[\"inboundSharedUserProfile-userId\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Inbound Shared User Profiles",
					"value": "Directory Get Inbound Shared User Profiles",
					"action": "Get inboundSharedUserProfiles from directory",
					"description": "Get inboundSharedUserProfiles from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/inboundSharedUserProfiles/{{$parameter[\"inboundSharedUserProfile-userId\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Inbound Shared User Profiles",
					"value": "Directory Update Inbound Shared User Profiles",
					"action": "Update the navigation property inboundSharedUserProfiles in directory",
					"description": "Update the navigation property inboundSharedUserProfiles in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/inboundSharedUserProfiles/{{$parameter[\"inboundSharedUserProfile-userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/inboundSharedUserProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory List Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/inboundSharedUserProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Create Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Create Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Create Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Home Tenant Id",
			"name": "homeTenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "homeTenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Create Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Create Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Create Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Delete Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Delete Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Get Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Get Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Get Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Update Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Update Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Update Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "Home Tenant Id",
			"name": "homeTenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "homeTenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Update Inbound Shared User Profiles"
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
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Update Inbound Shared User Profiles"
					]
				}
			}
		},
		{
			"displayName": "User Principal Name",
			"name": "userPrincipalName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userPrincipalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Inbound Shared User Profile"
					],
					"operation": [
						"Directory Update Inbound Shared User Profiles"
					]
				}
			}
		},
];
