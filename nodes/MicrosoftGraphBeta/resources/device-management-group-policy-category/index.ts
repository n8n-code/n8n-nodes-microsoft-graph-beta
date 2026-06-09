import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyCategoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Categories",
					"value": "Device Management List Group Policy Categories",
					"action": "Get groupPolicyCategories from deviceManagement",
					"description": "The available group policy categories for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Categories",
					"value": "Device Management Create Group Policy Categories",
					"action": "Create new navigation property to groupPolicyCategories for deviceManagement",
					"description": "Create new navigation property to groupPolicyCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyCategories"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Categories",
					"value": "Device Management Delete Group Policy Categories",
					"action": "Delete navigation property groupPolicyCategories for deviceManagement",
					"description": "Delete navigation property groupPolicyCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Categories",
					"value": "Device Management Get Group Policy Categories",
					"action": "Get groupPolicyCategories from deviceManagement",
					"description": "The available group policy categories for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Categories",
					"value": "Device Management Update Group Policy Categories",
					"action": "Update the navigation property groupPolicyCategories in deviceManagement",
					"description": "Update the navigation property groupPolicyCategories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Categories List Children",
					"value": "Device Management Group Policy Categories List Children",
					"action": "Get children from deviceManagement",
					"description": "The children categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}/children"
						}
					}
				},
				{
					"name": "Device Management Group Policy Categories Get Children",
					"value": "Device Management Group Policy Categories Get Children",
					"action": "Get children from deviceManagement",
					"description": "The children categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}/children/{{$parameter[\"groupPolicyCategory-id1\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Categories Get Definition File",
					"value": "Device Management Group Policy Categories Get Definition File",
					"action": "Get definitionFile from deviceManagement",
					"description": "The id of the definition file the category came from",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}/definitionFile"
						}
					}
				},
				{
					"name": "Device Management Group Policy Categories List Definitions",
					"value": "Device Management Group Policy Categories List Definitions",
					"action": "Get definitions from deviceManagement",
					"description": "The immediate GroupPolicyDefinition children of the category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}/definitions"
						}
					}
				},
				{
					"name": "Device Management Group Policy Categories Get Definitions",
					"value": "Device Management Group Policy Categories Get Definitions",
					"action": "Get definitions from deviceManagement",
					"description": "The immediate GroupPolicyDefinition children of the category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}/definitions/{{$parameter[\"groupPolicyDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Categories Get Parent",
					"value": "Device Management Group Policy Categories Get Parent",
					"action": "Get parent from deviceManagement",
					"description": "The parent category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyCategories/{{$parameter[\"groupPolicyCategory-id\"]}}/parent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management List Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Create Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Create Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Delete Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Delete Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Get Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Get Group Policy Categories"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Get Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Update Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Update Group Policy Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Children"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Children"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Children"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Definition File"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Definition File"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Definition File"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories List Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Definitions"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Parent"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Parent"
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
						"Device Management Group Policy Category"
					],
					"operation": [
						"Device Management Group Policy Categories Get Parent"
					]
				}
			}
		},
];
