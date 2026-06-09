import type { INodeProperties } from 'n8n-workflow';

export const financialsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					]
				}
			},
			"options": [
				{
					"name": "Financials Companies Company Journals Journal Post",
					"value": "Financials Companies Company Journals Journal Post",
					"action": "Invoke action post",
					"description": "Invoke action post",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/journals/{{$parameter[\"journal-id\"]}}/microsoft.graph.post"
						}
					}
				},
				{
					"name": "Financials Companies Company Purchase Invoices Purchase Invoice Post",
					"value": "Financials Companies Company Purchase Invoices Purchase Invoice Post",
					"action": "Invoke action post",
					"description": "Invoke action post",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/purchaseInvoices/{{$parameter[\"purchaseInvoice-id\"]}}/microsoft.graph.post"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Invoices Sales Invoice Cancel",
					"value": "Financials Companies Company Sales Invoices Sales Invoice Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesInvoices/{{$parameter[\"salesInvoice-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Invoices Sales Invoice Cancel And Send",
					"value": "Financials Companies Company Sales Invoices Sales Invoice Cancel And Send",
					"action": "Invoke action cancelAndSend",
					"description": "Invoke action cancelAndSend",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesInvoices/{{$parameter[\"salesInvoice-id\"]}}/microsoft.graph.cancelAndSend"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Invoices Sales Invoice Post",
					"value": "Financials Companies Company Sales Invoices Sales Invoice Post",
					"action": "Invoke action post",
					"description": "Invoke action post",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesInvoices/{{$parameter[\"salesInvoice-id\"]}}/microsoft.graph.post"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Invoices Sales Invoice Post And Send",
					"value": "Financials Companies Company Sales Invoices Sales Invoice Post And Send",
					"action": "Invoke action postAndSend",
					"description": "Invoke action postAndSend",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesInvoices/{{$parameter[\"salesInvoice-id\"]}}/microsoft.graph.postAndSend"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Invoices Sales Invoice Send",
					"value": "Financials Companies Company Sales Invoices Sales Invoice Send",
					"action": "Invoke action send",
					"description": "Invoke action send",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesInvoices/{{$parameter[\"salesInvoice-id\"]}}/microsoft.graph.send"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Quotes Sales Quote Make Invoice",
					"value": "Financials Companies Company Sales Quotes Sales Quote Make Invoice",
					"action": "Invoke action makeInvoice",
					"description": "Invoke action makeInvoice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesQuotes/{{$parameter[\"salesQuote-id\"]}}/microsoft.graph.makeInvoice"
						}
					}
				},
				{
					"name": "Financials Companies Company Sales Quotes Sales Quote Send",
					"value": "Financials Companies Company Sales Quotes Sales Quote Send",
					"action": "Invoke action send",
					"description": "Invoke action send",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/financials/companies/{{$parameter[\"company-id\"]}}/salesQuotes/{{$parameter[\"salesQuote-id\"]}}/microsoft.graph.send"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /financials/companies/{company-id}/journals/{journal-id}/microsoft.graph.post",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Journals Journal Post"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/microsoft.graph.post",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Purchase Invoices Purchase Invoice Post"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Invoices Sales Invoice Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/microsoft.graph.cancelAndSend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Invoices Sales Invoice Cancel And Send"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/microsoft.graph.post",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Invoices Sales Invoice Post"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/microsoft.graph.postAndSend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Invoices Sales Invoice Post And Send"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/microsoft.graph.send",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Invoices Sales Invoice Send"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/microsoft.graph.makeInvoice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Quotes Sales Quote Make Invoice"
					]
				}
			}
		},
		{
			"displayName": "POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/microsoft.graph.send",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Financials Actions"
					],
					"operation": [
						"Financials Companies Company Sales Quotes Sales Quote Send"
					]
				}
			}
		},
];
