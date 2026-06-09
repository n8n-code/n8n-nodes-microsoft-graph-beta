import type { INodeProperties } from 'n8n-workflow';

export const tenantRelationshipsDelegatedAdminCustomerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					]
				}
			},
			"options": [
				{
					"name": "Tenant Relationships List Delegated Admin Customers",
					"value": "Tenant Relationships List Delegated Admin Customers",
					"action": "List delegatedAdminCustomers",
					"description": "Get a list of the delegatedAdminCustomer objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminCustomers"
						}
					}
				},
				{
					"name": "Tenant Relationships Create Delegated Admin Customers",
					"value": "Tenant Relationships Create Delegated Admin Customers",
					"action": "Create new navigation property to delegatedAdminCustomers for tenantRelationships",
					"description": "Create new navigation property to delegatedAdminCustomers for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/delegatedAdminCustomers"
						}
					}
				},
				{
					"name": "Tenant Relationships Delete Delegated Admin Customers",
					"value": "Tenant Relationships Delete Delegated Admin Customers",
					"action": "Delete navigation property delegatedAdminCustomers for tenantRelationships",
					"description": "Delete navigation property delegatedAdminCustomers for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Get Delegated Admin Customers",
					"value": "Tenant Relationships Get Delegated Admin Customers",
					"action": "Get delegatedAdminCustomers from tenantRelationships",
					"description": "The customer who has a delegated admin relationship with a Microsoft partner.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Update Delegated Admin Customers",
					"value": "Tenant Relationships Update Delegated Admin Customers",
					"action": "Update the navigation property delegatedAdminCustomers in tenantRelationships",
					"description": "Update the navigation property delegatedAdminCustomers in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Customers List Service Management Details",
					"value": "Tenant Relationships Delegated Admin Customers List Service Management Details",
					"action": "List serviceManagementDetails",
					"description": "Get a list of the delegatedAdminServiceManagementDetail objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}/serviceManagementDetails"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Customers Create Service Management Details",
					"value": "Tenant Relationships Delegated Admin Customers Create Service Management Details",
					"action": "Create new navigation property to serviceManagementDetails for tenantRelationships",
					"description": "Create new navigation property to serviceManagementDetails for tenantRelationships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}/serviceManagementDetails"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Customers Delete Service Management Details",
					"value": "Tenant Relationships Delegated Admin Customers Delete Service Management Details",
					"action": "Delete navigation property serviceManagementDetails for tenantRelationships",
					"description": "Delete navigation property serviceManagementDetails for tenantRelationships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}/serviceManagementDetails/{{$parameter[\"delegatedAdminServiceManagementDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Customers Get Service Management Details",
					"value": "Tenant Relationships Delegated Admin Customers Get Service Management Details",
					"action": "Get serviceManagementDetails from tenantRelationships",
					"description": "Contains the management details of a service in the customer tenant that's managed by delegated administration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}/serviceManagementDetails/{{$parameter[\"delegatedAdminServiceManagementDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Tenant Relationships Delegated Admin Customers Update Service Management Details",
					"value": "Tenant Relationships Delegated Admin Customers Update Service Management Details",
					"action": "Update the navigation property serviceManagementDetails in tenantRelationships",
					"description": "Update the navigation property serviceManagementDetails in tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships/delegatedAdminCustomers/{{$parameter[\"delegatedAdminCustomer-id\"]}}/serviceManagementDetails/{{$parameter[\"delegatedAdminServiceManagementDetail-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminCustomers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships List Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminCustomers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Create Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminCustomers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Create Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delete Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delete Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Get Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Get Delegated Admin Customers"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Get Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Update Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Update Delegated Admin Customers"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers List Service Management Details"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Create Service Management Details"
					]
				}
			}
		},
		{
			"displayName": "POST /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Create Service Management Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Delete Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Delete Service Management Details"
					]
				}
			}
		},
		{
			"displayName": "GET /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Get Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Get Service Management Details"
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
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Get Service Management Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Update Service Management Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships/delegatedAdminCustomers/{delegatedAdminCustomer-id}/serviceManagementDetails/{delegatedAdminServiceManagementDetail-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Delegated Admin Customer"
					],
					"operation": [
						"Tenant Relationships Delegated Admin Customers Update Service Management Details"
					]
				}
			}
		},
];
