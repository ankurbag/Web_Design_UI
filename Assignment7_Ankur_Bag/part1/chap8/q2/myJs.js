// JavaScript Document

    var detailsWindow;
    var basketWindow;

    var stockItems = new Array();
    stockItems[0] = new StockItem("Professional Ajax, 2nd Edition", "$39.99");
    stockItems[1] = new StockItem("Professonal JavaScript, 2nd Edition", "$46.99");
	stockItems[2] = new StockItem("HTML, XHTML, and CSS, Sixth Edition: Visual QuickStart Guide", "$56.99");

    function removeItem(stockId)
    {
        stockItems[stockId].quantity = 0;
        alert("Item Removed");
        showBasket();
        return false;
    }
    
    function addBookToBasket(stockId)
    {
        stockItems[stockId].quantity = 1;
        alert("Item added successfully");
        detailsWindow.close();
    }

    function showDetails(bookURL)
    {
        detailsWindow = window.open(bookURL, "bookDetails", "width=400,height=500");
        detailsWindow.focus();
        return false;
    }

    function showBasket()
    {
        basketWindow = window.open('about:blank', 'shoppingBasket', 'width=400,height=350');
        basketWindow.document.open();
        var basketItem;
        var containsItems = false;
        basketWindow.document.write("<h4>Your shopping basket contains :</h4>");
        
        for (var i = 0; i < stockItems.length; i++)
        {
            var stockItem = stockItems[i];
            
            if (stockItem.quantity > 0)
            {
                basketWindow.document.write(stockItem.title + " at ");
                basketWindow.document.write(stockItem.price);
                basketWindow.document.write("&nbsp&nbsp&nbsp&nbsp");
                basketWindow.document.write("<a href='' onclick='return " 
                    + "window.opener.removeItem(" + i + ")'>");
                basketWindow.document.write("Remove Item</a><br />");
                containsItems = true;
            }
        }

        if (!containsItems)
        {
            basketWindow.document.write("<h4>No items</h4>");
        }
        
        basketWindow.document.close();
        basketWindow.focus();
    }
    
    function StockItem(title, price)
    {
        this.title = title;
        this.price = price;
        this.quantity = 0;
    }
