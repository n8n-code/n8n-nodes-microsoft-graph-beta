import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementCartToClassAssociationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Cart To Class Associations",
					"value": "Device Management List Cart To Class Associations",
					"action": "Get cartToClassAssociations from deviceManagement",
					"description": "The Cart To Class Associations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/cartToClassAssociations"
						}
					}
				},
				{
					"name": "Device Management Create Cart To Class Associations",
					"value": "Device Management Create Cart To Class Associations",
					"action": "Create new navigation property to cartToClassAssociations for deviceManagement",
					"description": "Create new navigation property to cartToClassAssociations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/cartToClassAssociations"
						}
					}
				},
				{
					"name": "Device Management Delete Cart To Class Associations",
					"value": "Device Management Delete Cart To Class Associations",
					"action": "Delete navigation property cartToClassAssociations for deviceManagement",
					"description": "Delete navigation property cartToClassAssociations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/cartToClassAssociations/{{$parameter[\"cartToClassAssociation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Cart To Class Associations",
					"value": "Device Management Get Cart To Class Associations",
					"action": "Get cartToClassAssociations from deviceManagement",
					"description": "The Cart To Class Associations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/cartToClassAssociations/{{$parameter[\"cartToClassAssociation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Cart To Class Associations",
					"value": "Device Management Update Cart To Class Associations",
					"action": "Update the navigation property cartToClassAssociations in deviceManagement",
					"description": "Update the navigation property cartToClassAssociations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/cartToClassAssociations/{{$parameter[\"cartToClassAssociation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/cartToClassAssociations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management List Cart To Class Associations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/cartToClassAssociations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Create Cart To Class Associations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/cartToClassAssociations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Create Cart To Class Associations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Delete Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Delete Cart To Class Associations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Get Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Get Cart To Class Associations"
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
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Get Cart To Class Associations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Update Cart To Class Associations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cart To Class Association"
					],
					"operation": [
						"Device Management Update Cart To Class Associations"
					]
				}
			}
		},
];
